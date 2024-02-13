import { renderPage, pageDataParser } from '../../common';

import db from '../../database/React/RenderProps_db.json';

const RenderProps = () => {
  const data = pageDataParser(db);

  return renderPage(data);
};

export default RenderProps;
