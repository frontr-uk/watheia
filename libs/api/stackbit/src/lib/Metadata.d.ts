/**
 * Metadata is injected into each model instance upon
 * instantiation, and contains information pertaining
 * to the model AST.
 */
export interface Metadata extends Record<string, unknown> {
  readonly id: string;
  readonly source: string;
  readonly modelType: string;
  readonly modelName: string;
  readonly modelLabel: string;
  readonly relSourcePath: string;
  readonly relProjectPath: string;
  readonly sourceName: string;
  readonly sourcePath: string;
}
