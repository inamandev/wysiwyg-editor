/*!
 * froala_editor v4.4.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2025 Froala Labs
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('froala-editor')) :
  typeof define === 'function' && define.amd ? define(['froala-editor'], factory) :
  (factory(global.FroalaEditor));
}(this, (function (FE) { 'use strict';

  FE = FE && FE.hasOwnProperty('default') ? FE['default'] : FE;

  /**
   * Russian
   */
  FE.LANGUAGE['ru'] = {
    translation: {
      // Place holder
      'Type something': "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C",
      // Basic formatting
      'Bold': "\u0416\u0438\u0440\u043D\u044B\u0439",
      'Italic': "\u041A\u0443\u0440\u0441\u0438\u0432",
      'Underline': "\u041F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044B\u0439",
      'Strikethrough': "\u0417\u0430\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044B\u0439",
      // Main buttons
      'Insert': "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C",
      'Delete': "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
      'Cancel': "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
      'OK': "\u041E\u043A",
      'Back': "\u043D\u0430\u0437\u0430\u0434",
      'Remove': "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
      'More': "\u0411\u043E\u043B\u044C\u0448\u0435",
      'Update': "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",
      'Style': "\u0421\u0442\u0438\u043B\u044C",
      // Font
      'Font Family': "\u0428\u0440\u0438\u0444\u0442",
      'Font Size': "\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",
      // Colors
      'Colors': "\u0426\u0432\u0435\u0442\u0430",
      'Background': "\u0424\u043E\u043D",
      'Text': "\u0422\u0435\u043A\u0441\u0442",
      'HEX Color': 'HEX цвет',
      // Paragraphs
      'Paragraph Format': "\u0424\u043E\u0440\u043C\u0430\u0442 \u0430\u0431\u0437\u0430\u0446\u0430",
      'Normal': "\u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u0439",
      'Code': "\u041A\u043E\u0434",
      'Heading 1': "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1",
      'Heading 2': "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 2",
      'Heading 3': "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 3",
      'Heading 4': "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 4",
      // Style
      'Paragraph Style': "\u0421\u0442\u0438\u043B\u044C \u0430\u0431\u0437\u0430\u0446\u0430",
      'Inline Style': "\u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C",
      // Alignment
      'Align': "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E",
      'Align Left': "\u041F\u043E \u043B\u0435\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",
      'Align Center': "\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",
      'Align Right': "\u041F\u043E \u043F\u0440\u0430\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",
      'Align Justify': "\u041F\u043E \u0448\u0438\u0440\u0438\u043D\u0435",
      'None': "\u041D\u0438\u043A\u0430\u043A",
      // Lists
      'Ordered List': "\u041D\u0443\u043C\u0435\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A",
      'Unordered List': "\u041C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A",
      'Default': 'По умолчанию',
      'Lower Alpha': 'Нижняя альфа',
      'Lower Greek': 'Нижний греческий',
      'Lower Roman': 'Нижний римский',
      'Upper Alpha': 'Верхняя альфа',
      'Upper Roman': 'Верхний римский',
      'Circle': 'Круг',
      'Disc': 'Диск',
      'Square': 'Площадь',
      // Line height
      'Line Height': 'Высота линии',
      'Single': 'Одинарный',
      'Double': 'Двойной',
      // Indent
      'Decrease Indent': "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u043E\u0442\u0441\u0442\u0443\u043F",
      'Increase Indent': "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043E\u0442\u0441\u0442\u0443\u043F",
      // Links
      'Insert Link': "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",
      'Open in new tab': "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",
      'Open Link': "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435",
      'Edit Link': "\u041E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",
      'Unlink': "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",
      'Choose Link': "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443",
      // Images
      'Insert Image': "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
      'Upload Image': "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
      'By URL': "\u041F\u043E \u0441\u0441\u044B\u043B\u043A\u0435",
      'Browse': "\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
      'Drop image': "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0441\u044E\u0434\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
      'or click': "\u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435",
      'Manage Images': "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u043C\u0438",
      'Loading': "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
      'Deleting': "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435",
      'Tags': "\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430",
      'Are you sure? Image will be deleted.': "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B? \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u043E.",
      'Replace': "\u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C",
      'Uploading': "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
      'Loading image': "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
      'Display': "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
      'Inline': "\u041E\u0431\u0442\u0435\u043A\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u043E\u043C",
      'Break Text': "\u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0435 \u0432 \u0442\u0435\u043A\u0441\u0442",
      'Alternative Text': "\u0410\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442",
      'Change Size': "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440",
      'Width': "\u0428\u0438\u0440\u0438\u043D\u0430",
      'Height': "\u0412\u044B\u0441\u043E\u0442\u0430",
      'Something went wrong. Please try again.': "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",
      'Image Caption': 'Подпись к изображению',
      'Advanced Edit': 'Расширенное редактирование',
      // Video
      'Insert Video': "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0438\u0434\u0435\u043E",
      'Embedded Code': "HTML-\u043A\u043E\u0434 \u0434\u043B\u044F \u0432\u0441\u0442\u0430\u0432\u043A\u0438",
      'Paste in a video URL': 'Вставить URL-адрес видео',
      'Drop video': 'Вставить видео',
      'Your browser does not support HTML5 video.': 'Ваш браузер не поддерживает html5 видео.',
      'Upload Video': 'Загрузить видео',
      // Tables
      'Insert Table': "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0442\u0430\u0431\u043B\u0438\u0446\u0443",
      'Table Header': "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0442\u0430\u0431\u043B\u0438\u0446\u044B",
      'Remove Table': "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0430\u0431\u043B\u0438\u0446\u0443",
      'Table Style': "\u0421\u0442\u0438\u043B\u044C \u0442\u0430\u0431\u043B\u0438\u0446\u044B",
      'Horizontal Align': "\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435",
      'Row': "\u0421\u0442\u0440\u043E\u043A\u0430",
      'Insert row above': "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u0441\u0432\u0435\u0440\u0445\u0443",
      'Insert row below': "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u0441\u043D\u0438\u0437\u0443",
      'Delete row': "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443",
      'Column': "\u0421\u0442\u043E\u043B\u0431\u0435\u0446",
      'Insert column before': "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446 \u0441\u043B\u0435\u0432\u0430",
      'Insert column after': "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446 \u0441\u043F\u0440\u0430\u0432\u0430",
      'Delete column': "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446",
      'Cell': "\u042F\u0447\u0435\u0439\u043A\u0430",
      'Merge cells': "\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u0442\u044C \u044F\u0447\u0435\u0439\u043A\u0438",
      'Horizontal split': "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
      'Vertical split': "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
      'Cell Background': "\u0424\u043E\u043D \u044F\u0447\u0435\u0439\u043A\u0438",
      'Vertical Align': "\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435",
      'Top': "\u041F\u043E \u0432\u0435\u0440\u0445\u043D\u0435\u043C\u0443 \u043A\u0440\u0430\u044E",
      'Middle': "\u041F\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435",
      'Bottom': "\u041F\u043E \u043D\u0438\u0436\u043D\u0435\u043C\u0443 \u043A\u0440\u0430\u044E",
      'Align Top': "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u0432\u0435\u0440\u0445\u043D\u0435\u043C\u0443 \u043A\u0440\u0430\u044E",
      'Align Middle': "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435",
      'Align Bottom': "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u043D\u0438\u0436\u043D\u0435\u043C\u0443 \u043A\u0440\u0430\u044E",
      'Cell Style': "\u0421\u0442\u0438\u043B\u044C \u044F\u0447\u0435\u0439\u043A\u0438",
      // Files
      'Upload File': "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B",
      'Drop file': "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0441\u044E\u0434\u0430 \u0444\u0430\u0439\u043B",
      // Emoticons
      'Emoticons': "\u0421\u043C\u0430\u0439\u043B\u0438\u043A\u0438",
      'Grinning face': "\u0423\u0445\u043C\u044B\u043B\u043A\u0430 \u043D\u0430 \u043B\u0438\u0446\u0435",
      'Grinning face with smiling eyes': "\u0423\u0441\u043C\u0435\u0445\u043D\u0443\u0432\u0448\u0435\u0435\u0441\u044F \u043B\u0438\u0446\u043E \u0441 \u0443\u043B\u044B\u0431\u0430\u044E\u0449\u0438\u043C\u0438\u0441\u044F \u0433\u043B\u0430\u0437\u0430\u043C\u0438",
      'Face with tears of joy': "\u041B\u0438\u0446\u043E \u0441\u043E \u0441\u043B\u0435\u0437\u0430\u043C\u0438 \u0440\u0430\u0434\u043E\u0441\u0442\u0438",
      'Smiling face with open mouth': "\u0423\u043B\u044B\u0431\u0430\u044E\u0449\u0435\u0435\u0441\u044F \u043B\u0438\u0446\u043E \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0440\u0442\u043E\u043C",
      'Smiling face with open mouth and smiling eyes': "\u0423\u043B\u044B\u0431\u0430\u044F\u0441\u044C \u043B\u0438\u0446\u043E \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0440\u0442\u043E\u043C \u0438 \u0443\u043B\u044B\u0431\u0430\u044E\u0449\u0438\u0435\u0441\u044F \u0433\u043B\u0430\u0437\u0430",
      'Smiling face with open mouth and cold sweat': "\u0423\u043B\u044B\u0431\u0430\u044F\u0441\u044C \u043B\u0438\u0446\u043E \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0440\u0442\u043E\u043C \u0438 \u0445\u043E\u043B\u043E\u0434\u043D\u044B\u0439 \u043F\u043E\u0442",
      'Smiling face with open mouth and tightly-closed eyes': "\u0423\u043B\u044B\u0431\u0430\u044F\u0441\u044C \u043B\u0438\u0446\u043E \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0440\u0442\u043E\u043C \u0438 \u043F\u043B\u043E\u0442\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u043C\u0438 \u0433\u043B\u0430\u0437\u0430\u043C\u0438",
      'Smiling face with halo': "\u0423\u043B\u044B\u0431\u0430\u044F\u0441\u044C \u043B\u0438\u0446\u043E \u0433\u0430\u043B\u043E",
      'Smiling face with horns': "\u0423\u043B\u044B\u0431\u0430\u044F\u0441\u044C \u043B\u0438\u0446\u043E \u0441 \u0440\u043E\u0433\u0430\u043C\u0438",
      'Winking face': "\u043F\u043E\u0434\u043C\u0438\u0433\u0438\u0432\u0430\u044F \u043B\u0438\u0446\u043E",
      'Smiling face with smiling eyes': "\u0423\u043B\u044B\u0431\u0430\u044F\u0441\u044C \u043B\u0438\u0446\u043E \u0441 \u0443\u043B\u044B\u0431\u0430\u044E\u0449\u0438\u043C\u0438\u0441\u044F \u0433\u043B\u0430\u0437\u0430\u043C\u0438",
      'Face savoring delicious food': "\u041B\u0438\u0446\u043E \u0441\u043C\u0430\u043A\u0443\u044E\u0449\u0435\u0435 \u0432\u043A\u0443\u0441\u043D\u0443\u044E \u0435\u0434\u0443",
      'Relieved face': "\u041E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0435\u043D\u044B \u043B\u0438\u0446\u043E",
      'Smiling face with heart-shaped eyes': "\u0423\u043B\u044B\u0431\u0430\u044F\u0441\u044C \u043B\u0438\u0446\u043E \u0432 \u0444\u043E\u0440\u043C\u0435 \u0441\u0435\u0440\u0434\u0446\u0430 \u0433\u043B\u0430\u0437\u0430\u043C\u0438",
      'Smiling face with sunglasses': "\u0423\u043B\u044B\u0431\u0430\u044F\u0441\u044C \u043B\u0438\u0446\u043E \u0441 \u043E\u0447\u043A\u0430\u043C\u0438",
      'Smirking face': "\u0423\u0441\u043C\u0435\u0445\u043D\u0443\u0432\u0448\u0438\u0441\u044C \u043B\u0438\u0446\u043E",
      'Neutral face': "\u041E\u0431\u044B\u0447\u043D\u044B\u0439 \u043B\u0438\u0446\u043E",
      'Expressionless face': "\u041D\u0435\u0432\u044B\u0440\u0430\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043B\u0438\u0446\u043E",
      'Unamused face': "\u041D\u0435 \u0441\u043C\u0435\u0448\u043D\u043E \u043B\u0438\u0446\u043E",
      'Face with cold sweat': "\u041B\u0438\u0446\u043E \u0432 \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u043C \u043F\u043E\u0442\u0443",
      'Pensive face': "\u0417\u0430\u0434\u0443\u043C\u0447\u0438\u0432\u044B\u0439 \u043B\u0438\u0446\u043E",
      'Confused face': "\u0421\u043C\u0443\u0449\u0435\u043D\u043D\u043E\u0435 \u043B\u0438\u0446\u043E",
      'Confounded face': "\u041F\u043E\u0441\u0442\u044B\u0434\u043D\u043E\u0435 \u043B\u0438\u0446\u043E",
      'Kissing face': "\u041F\u043E\u0446\u0435\u043B\u0443\u0438 \u043B\u0438\u0446\u043E",
      'Face throwing a kiss': "\u041B\u0438\u0446\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0435\u0435 \u043F\u043E\u0446\u0435\u043B\u0443\u0439",
      'Kissing face with smiling eyes': "\u041F\u043E\u0446\u0435\u043B\u0443\u0438 \u043B\u0438\u0446\u043E \u0441 \u0443\u043B\u044B\u0431\u0430\u044E\u0449\u0438\u043C\u0438\u0441\u044F \u0433\u043B\u0430\u0437\u0430\u043C\u0438",
      'Kissing face with closed eyes': "\u041F\u043E\u0446\u0435\u043B\u0443\u0438 \u043B\u0438\u0446\u043E \u0441 \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u043C\u0438 \u0433\u043B\u0430\u0437\u0430\u043C\u0438",
      'Face with stuck out tongue': "\u041B\u0438\u0446\u043E \u0441 \u0442\u043E\u0440\u0447\u0430\u0449\u0438\u043C \u044F\u0437\u044B\u043A\u043E\u043C",
      'Face with stuck out tongue and winking eye': "\u041B\u0438\u0446\u043E \u0441 \u0442\u043E\u0440\u0447\u0430\u0449\u0438\u043C \u044F\u0437\u044B\u043A\u043E\u043C \u0438 \u043F\u043E\u0434\u043C\u0438\u0433\u0438\u0432\u0430\u044E\u0449\u0438\u043C \u0433\u043B\u0430\u0437\u043E\u043C",
      'Face with stuck out tongue and tightly-closed eyes': "\u041B\u0438\u0446\u043E \u0441 \u0442\u043E\u0440\u0447\u0430\u0449\u0438\u043C \u044F\u0437\u044B\u043A\u043E\u043C \u0438 \u043F\u043B\u043E\u0442\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u043C\u0438 \u0433\u043B\u0430\u0437\u0430\u043C\u0438",
      'Disappointed face': "\u0420\u0430\u0437\u043E\u0447\u0430\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u043B\u0438\u0446\u043E",
      'Worried face': "\u041E\u0431\u0435\u0441\u043F\u043E\u043A\u043E\u0435\u043D\u043D\u044B\u0439 \u043B\u0438\u0446\u043E",
      'Angry face': "\u0417\u043B\u043E\u0439 \u043B\u0438\u0446\u043E",
      'Pouting face': "\u041F\u0443\u0445\u043B\u044B\u0435 \u043B\u0438\u0446\u043E",
      'Crying face': "\u041F\u043B\u0430\u0447\u0443\u0449\u0435\u0435 \u043B\u0438\u0446\u043E",
      'Persevering face': "\u041D\u0430\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u0430\u044F \u043B\u0438\u0446\u043E",
      'Face with look of triumph': "\u041B\u0438\u0446\u043E \u0441 \u0432\u0438\u0434\u043E\u043C \u0442\u0440\u0438\u0443\u043C\u0444\u0430",
      'Disappointed but relieved face': "\u0420\u0430\u0437\u043E\u0447\u0430\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435, \u043D\u043E \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E\u0435 \u043B\u0438\u0446\u043E",
      'Frowning face with open mouth': "\u041D\u0430\u0445\u043C\u0443\u0440\u0435\u043D\u043D\u043E\u0435 \u043B\u0438\u0446\u043E \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0440\u0442\u043E\u043C",
      'Anguished face': "\u043C\u0443\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043B\u0438\u0446\u043E",
      'Fearful face': "\u041D\u0430\u043F\u0443\u0433\u0430\u043D\u043D\u043E\u0435 \u043B\u0438\u0446\u043E",
      'Weary face': "\u0423\u0441\u0442\u0430\u043B\u044B\u0439 \u043B\u0438\u0446\u043E",
      'Sleepy face': "\u0441\u043E\u043D\u043D\u043E\u0435 \u043B\u0438\u0446\u043E",
      'Tired face': "\u0423\u0441\u0442\u0430\u043B\u0438 \u043B\u0438\u0446\u043E",
      'Grimacing face': "\u0413\u0440\u0438\u043C\u0430\u0441\u0430 \u043D\u0430 \u043B\u0438\u0446\u0435",
      'Loudly crying face': "\u0413\u0440\u043E\u043C\u043A\u043E \u043F\u043B\u0430\u0447\u0430 \u043B\u0438\u0446\u043E",
      'Face with open mouth': "\u041B\u0438\u0446\u043E \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0440\u0442\u043E\u043C",
      'Hushed face': "\u0417\u0430\u0442\u0438\u0445\u0448\u0438\u0439 \u043B\u0438\u0446\u043E",
      'Face with open mouth and cold sweat': "\u041B\u0438\u0446\u043E \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0440\u0442\u043E\u043C \u0432 \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u043C \u043F\u043E\u0442\u0443",
      'Face screaming in fear': "\u041B\u0438\u0446\u043E \u043A\u0440\u0438\u0447\u0430\u0449\u0435\u0435 \u043E\u0442 \u0441\u0442\u0440\u0430\u0445\u0430",
      'Astonished face': "\u0423\u0434\u0438\u0432\u043B\u0435\u043D\u043D\u043E\u0435 \u043B\u0438\u0446\u043E",
      'Flushed face': "\u041F\u043E\u043A\u0440\u0430\u0441\u043D\u0435\u0432\u0448\u0435\u0435 \u043B\u0438\u0446\u043E",
      'Sleeping face': "\u0421\u043F\u044F\u0449\u0430\u044F \u043B\u0438\u0446\u043E",
      'Dizzy face': "\u0414\u0438\u0437\u0437\u0438 \u043B\u0438\u0446\u043E",
      'Face without mouth': "\u041B\u0438\u0446\u043E \u0431\u0435\u0437 \u0440\u0442\u0430",
      'Face with medical mask': "\u041B\u0438\u0446\u043E \u0441 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0439 \u043C\u0430\u0441\u043A\u043E\u0439",
      // Line breaker
      'Break': "\u041D\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430",
      // Math
      'Subscript': "\u041D\u0438\u0436\u043D\u0438\u0439 \u0438\u043D\u0434\u0435\u043A\u0441",
      'Superscript': "\u0412\u0435\u0440\u0445\u043D\u0438\u0439 \u0438\u043D\u0434\u0435\u043A\u0441",
      // Full screen
      'Fullscreen': "\u041D\u0430 \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D",
      // Horizontal line
      'Insert Horizontal Line': "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0443\u044E \u043B\u0438\u043D\u0438\u044E",
      // Clear formatting
      'Clear Formatting': "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
      // Save
      'Save': "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
      // Undo, redo
      'Undo': "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
      'Redo': "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",
      // Select all
      'Select All': "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0451",
      // Code view
      'Code View': "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 HTML-\u043A\u043E\u0434\u0430",
      // Quote
      'Quote': "\u0426\u0438\u0442\u0430\u0442\u0430",
      'Increase': "\u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435",
      'Decrease': "\u0421\u043D\u0438\u0436\u0435\u043D\u0438\u0435",
      // Quick Insert
      'Quick Insert': "\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0432\u0441\u0442\u0430\u0432\u043A\u0430",
      // Spcial Characters
      'Special Characters': 'Специальные символы',
      'Latin': 'Латинский',
      'Greek': 'Греческий',
      'Cyrillic': 'Кириллица',
      'Punctuation': 'Пунктуация',
      'Currency': 'Валюта',
      'Arrows': 'Стрелки',
      'Math': 'Математический',
      'Misc': 'Разное',
      // Print.
      'Print': 'Распечатать',
      // Spell Checker.
      'Spell Checker': 'Программа проверки орфографии',
      // Help
      'Help': 'Помощь',
      'Shortcuts': 'Горячие клавищи',
      'Inline Editor': 'Встроенный редактор',
      'Show the editor': 'Показать редактор',
      'Common actions': 'Общие действия',
      'Copy': 'Копировать',
      'Cut': 'Вырезать',
      'Paste': 'Вставить',
      'Basic Formatting': 'Базовое форматирование',
      'Increase quote level': 'Увеличить уровень цитирования',
      'Decrease quote level': 'Уменьшить уровень цитирования',
      'Image / Video': 'Изображение / Видео',
      'Resize larger': 'Изменить размер',
      'Resize smaller': 'Уменьшить размер',
      'Table': 'Таблица',
      'Select table cell': 'Выбрать ячейку таблицы',
      'Extend selection one cell': 'Расширить выделение одной ячейки',
      'Extend selection one row': 'Расширить выделение на одну строку',
      'Navigation': 'Навигация',
      'Focus popup / toolbar': 'Сфокусировать всплывающее окно / панель инструментов',
      'Return focus to previous position': 'Вернуть фокус на предыдущую позицию',
      // Embed.ly
      'Embed URL': 'Вставить URL-адрес',
      'Paste in a URL to embed': 'Вставить URL-адрес для встраивания',
      // Word Paste.
      'The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?': 'Вы пытаетесь вставить текст из документа Microsoft Word. Вы хотите сохранить или очистить формат?',
      'Keep': 'Оставить',
      'Clean': 'Очистить',
      'Word Paste Detected': 'Обнаружено копирование из Word',
      // Character Counter
      'Characters': 'символы',
      // More Buttons
      'More Text': 'Редактирование текста',
      'More Paragraph': 'Редактирование параграфа',
      'More Rich': 'Вставка',
      'More Misc': 'Другое'
    },
    direction: 'ltr'
  };

})));
//# sourceMappingURL=ru.js.map
