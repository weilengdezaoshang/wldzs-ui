// src/Button/demo/base.tsx

import { Button } from 'wldzs-ui';

export default () => {
  return (
    <>
      <Button type="default" status="default">
        默认按钮
      </Button>{' '}
      &nbsp;
      <Button type="primary" status="default">
        主要按钮
      </Button>
    </>
  );
};
