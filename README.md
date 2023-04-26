# Kirkepostille
The Theme used in Kirkepostille is [`BlogiNote`](https://github.com/Benbinbin/BlogiNote) (per 2022) from [`Benbinbin`](https://github.com/Benbinbin), that is a hidden treasure, like the treasure in the Bible, hidden for the wise and prudent. Matt 11, 25. With my repo you can move on to `Google Play Store`, and get better Page Load Analyze:

| BlogiNote | Kirkepostille |
| --- | --- |
|![](https://raw.githubusercontent.com/lovkyndig/kirkepostille/main/public/img/bloginote.jpg) |![](https://raw.githubusercontent.com/lovkyndig/kirkepostille/main/public/img/100lighthouse.jpg)|  

This is the Lighthouse report on Accessibility, Best Practices[^1], SEO and PWA[^2] (Progressive Web App). Note that [ahrefs](https://app.ahrefs.com/) test gave 100% Health Score.

![Lighthouse-Metrics](https://raw.githubusercontent.com/lovkyndig/kirkepostille/main/public/img/lighthouse.PNG)

This is the capture from the screen[^3], on keypress ` Ctrl + Shift + I`, from the frontpage in Kirkepostille. Then click on the button `Analyze Page load`, and see the results with your own eyes.

## Install and setup
Read the release notes for guide to setup a release.

## To do-list (personal notes)
- Move router.options.ts to another directory - because bubblewrap `update removes` file from /app/
- Update to the latest Bloginote-theme.
- Move bubblewrap build from root to antoher folder.
- The find-function shows the first place in the modal-window, but skip the first place in the article if more than one hit.
- MD-files in offline-mode (in public-folder)
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
- Add dark-light-themetoggle[^4]

## License
[MIT](./LICENSE)

[^1]: Best Practices give one error on all nuxt3-homepages [per 14.04.2023](https://github.com/nuxt/nuxt/discussions/20262). Nothing wrong widt the code in the GitHub-repo.
[^2]: _Content is sized correctly for the viewport_ give somethimes error. I have tried to fix this in app.vue (width the function widthCheck), but am unsure of the effect.
[^3]: Notice only 1 blue issue on the frontpage.
[^4]: Updated 26.April 2023