import { pageDataParser, renderPage } from '../../../common';

import db from '../../../database/React/Refs/Refs_db.json';

const Refs = () => {
  const data = pageDataParser(db);

  return renderPage(data);
};

export default Refs;
