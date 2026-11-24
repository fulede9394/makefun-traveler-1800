import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Explaining the internet to a traveler from 1800, in words they could know.
const LINE =
  "Picture a great web of copper wires carrying letters faster than any horse, where every town crier shouts at once and anyone may answer.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
