import { getAllRuleMessages } from '@/lib/rulesLoader';
import RuleBookClient from './RuleBookClient';

export default function RuleBookPage() {
  const ruleMessages = getAllRuleMessages();

  return <RuleBookClient ruleMessages={ruleMessages} />;
}
