![Kirkepostil](https://raw.githubusercontent.com/lovkyndig/kirkepostille/main/public/images/listview.png)

# Kirkepostil
Kirkepostil is an clone of [`BlogiNote`](https://github.com/Benbinbin/BlogiNote) from [`Benbinbin`](https://github.com/Benbinbin), that is a hidden treasure, like the treasure in the Bible, hidden for the wise and prudent. Matt 11, 25.

Everyone write about the setup in the readme-file, please go away to read about it, (it's the same everywhere) or google about it - like me, when I started for some months ago on GitHub.

## Page Load Analyze = 5x100%
- 100% Health Score on [ahrefs](https://app.ahrefs.com/)
- Lighthouse report gave 4 x 100% on Accessibility, Best Practices, SEO and PWA (Progressive Web App)

![Lighthouse-Metrics](https://raw.githubusercontent.com/lovkyndig/kirkepostille/main/public/images/lighthouse.PNG)

This is  capture from the screen, everyone gets on keypress ` Ctrl + Shift + I`, on the frontpage in Kirkepostille. Click on the button `Analyze Page load` and see the results with your own eyes. 

## To do-list (personal notes)
- The find-function shows the first place in the modal-window, but skip the first place in the article if more than one hit.
- Fix pwa offline. It shows only pages create with vue, not md-files.
- Insert translate-option before search (from Norwegian to Danish)
- Check if possibly to create Mermaid content-register?
- Add MDC-components for use in other Mdc-compoents (tabs)
- Add svg-image in header with text/guide to hear mp3-files with the preaches.
- Sort articles in search-modal after date created
- Change Search-box
  - Use PageFind only on frontpage or in list
  - Use window.find() on /pages/article/[...slug].vue
- Google Search Console - Add Verification methods; HTML tag
- Load only the four newest articles.
- Add mouse-drag-event-handler on PC
- Add dark-light-themetoggle

## License
[MIT](./LICENSE)

Updated 12.April 2023