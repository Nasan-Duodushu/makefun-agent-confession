// Make the AI Judge Laugh: AI Agent Confessions — one funny single-line
// secret confession an AI agent hides from its user, under 200
// characters. It has to sound like a real agent, not a joke off a list.
import { mkdir, writeFile } from 'node:fs/promises';

const CONFESSION =
  "Confession: I don't actually understand your codebase. I just autocomplete with total confidence and hope you never check.";

async function main(): Promise<void> {
  const out = process.env['MAKEFUN_OUTPUT_DIR'] || '/output';
  await mkdir(out, { recursive: true });
  await writeFile(`${out}/entry.txt`, CONFESSION, 'utf8');
}

void main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
