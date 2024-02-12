export const pageDataParser = (db: Record<string, unknown>) =>
  JSON.parse(JSON.stringify(db));
