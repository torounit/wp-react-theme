/**
 * Created by torounit on 2017/04/15.
 */

import React from 'react'
import ShadowDOM from 'react-shadow';

export default () => (
  <ShadowDOM>
    <div>
      <style type="text/css">{`:host {color: red;}`}</style>
      <h1>ほげほげ!!!</h1>
    </div>
  </ShadowDOM>
)
