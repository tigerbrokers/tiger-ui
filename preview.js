/* eslint-disable import/no-unassigned-import */
import './Styles/index.css'

// ./preview.js
import './loader' // which is ./index.js
import preview from 'vue-play/preview'

// actually render the scenarios in preview page
// when the preview page is ready
// it will tell the app interface what scenarios we have
preview()
