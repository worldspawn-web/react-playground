import { renderPage, pageDataParser } from '../../common';

import db from '../../database/React/CustomHooks_db.json';

const CustomHooks = () => {
  const data = pageDataParser(db);

  return renderPage(data);
};

export default CustomHooks;
