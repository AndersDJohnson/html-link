#!/usr/bin/env node

require('args-or-stdin')({ multi: true })
.then(require('log-result')(require('spreader')(require('.'))))
.catch(require('error-exit'))
