# Content Collections Table - Hourly Rotation Architecture

## Overview

A simple and elegant approach for managing rotating content sets using a collections table with hourly rotation. Each collection contains 7 content items that display for one hour, creating 24 unique sets throughout the day.

## Database Schema

```sql
CREATE TABLE public.content_collections (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL, -- 'hero-hour-0', 'hero-hour-1', etc.
  content_ids BIGINT[] NOT NULL, -- [1, 5, 12, 8, 15, 3, 9]
  hour_of_day INTEGER NOT NULL CHECK (hour_of_day >= 0 AND hour_of_day <= 23),
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  CONSTRAINT unique_active_hour UNIQUE (hour_of_day, active)
);
```

## Query Logic

```typescript
// Get current hour's content collection
const currentHour = new Date().getHours(); // 0-23

const collection = await db.query(
  `
  SELECT content_ids FROM content_collections 
  WHERE hour_of_day = $1 AND active = true
`,
  [currentHour]
);

// Fetch the actual content in the correct order
const content = await db.query(
  `
  SELECT id, content_text, content_type 
  FROM content 
  WHERE id = ANY($1)
  ORDER BY array_position($1, id)
`,
  [collection.content_ids]
);
```

## Benefits

### ⚡ Performance

- **Ultra-fast queries**: Single array lookup + one content query
- **Predictable load**: Always exactly 7 items
- **Easy caching**: Content changes only once per hour

### 🎯 Control & Flexibility

- **24 curated sets**: Different content vibes for different times of day
- **Creative scheduling**: Morning motivation, lunch facts, evening wisdom
- **Easy management**: Just update arrays in 24 records
- **Instant rotation**: New content every hour automatically

### 🏗️ Architecture Simplicity

- **No complex algorithms**: Straightforward hour-based lookup
- **Predictable behavior**: You know exactly when content changes
- **Easy debugging**: Clear relationship between hour and content set

## Content Strategy Examples

| Time  | Content Focus | Example Theme               |
| ----- | ------------- | --------------------------- |
| 6 AM  | Motivational  | Start-the-day inspiration   |
| 9 AM  | Wisdom        | Morning hockey insights     |
| 12 PM | Statistics    | Lunch-break quick facts     |
| 3 PM  | Greeting      | Afternoon encouragement     |
| 6 PM  | Wisdom        | Post-work hockey knowledge  |
| 9 PM  | Motivational  | Evening inspiration         |
| 11 PM | Greeting      | Wind-down positive messages |

## Implementation Notes

### Content Management System Integration

- Admin interface to manage 24 collections
- Drag-and-drop reordering of content within collections
- Preview functionality to see what displays at each hour
- Bulk operations to update multiple collections

### API Endpoint Structure

```typescript
GET /api/collections/current    // Current hour's collection
GET /api/collections/:hour     // Specific hour's collection
PUT /api/collections/:hour     // Update hour's collection
```

### Frontend Integration

```typescript
// OnlyHockey website fetches current content
const response = await fetch('/api/collections/current');
const heroContent = await response.json();
```

## Sample Data Setup

```sql
-- Morning motivation (6 AM)
INSERT INTO content_collections (name, content_ids, hour_of_day) VALUES
('hero-hour-6', ARRAY[1, 5, 9, 13, 17, 21, 25], 6);

-- Lunch facts (12 PM)
INSERT INTO content_collections (name, content_ids, hour_of_day) VALUES
('hero-hour-12', ARRAY[2, 6, 10, 14, 18, 22, 26], 12);

-- Evening wisdom (18 PM)
INSERT INTO content_collections (name, content_ids, hour_of_day) VALUES
('hero-hour-18', ARRAY[3, 7, 11, 15, 19, 23, 27], 18);
```

## Migration Strategy

1. **Phase 1**: Create collections table and populate with initial 24 sets
2. **Phase 2**: Build admin interface for collection management
3. **Phase 3**: Integrate with OnlyHockey website API
4. **Phase 4**: Add analytics to track content performance by hour

---

_This architecture provides automatic content rotation while maintaining full editorial control over what displays when._
