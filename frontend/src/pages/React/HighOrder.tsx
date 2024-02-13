import { pageDataParser, renderPage } from '../../common';

import db from '../../database/React/HighOrderComponents_db.json';

const HighOrder = () => {
  const data = pageDataParser(db);

  return renderPage(data);
};

export default HighOrder;
