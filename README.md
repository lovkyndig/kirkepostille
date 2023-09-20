# Kirkepostille
The Theme used in Kirkepostille is [`BlogiNote`](https://github.com/Benbinbin/BlogiNote) (per 2022) from [`Benbinbin`](https://github.com/Benbinbin), that is a hidden treasure, like the treasure in the Bible, hidden for the wise and prudent. Matt 11, 25. 

## Why copy a repo?
Like many of you: I'm not a css-stylist. I love a good theme and when I find one I'm not ashamed to use it at all. This repo give you the freedom to be independent of [Benbinbin](https://github.com/Benbinbin).

With my repo you can move on to `Google Play Store`[^1], and get better Page Load Analyze:

| BlogiNote | Kirkepostille |
| --- | --- |
|![](https://raw.githubusercontent.com/lovkyndig/kirkepostille/main/public/img/bloginote.jpg) |![](https://raw.githubusercontent.com/lovkyndig/kirkepostille/main/public/img/100lighthouse.jpg)|  

This is the Lighthouse report on Accessibility, Best Practices[^2], SEO and PWA[^3] (Progressive Web App). Note that [ahrefs](https://app.ahrefs.com/) test gave 100% Health Score.

![Lighthouse-Metrics](https://raw.githubusercontent.com/lovkyndig/kirkepostille/main/public/img/lighthouse.PNG)

This is the capture from the screen[^4], on keypress ` Ctrl + Shift + I`, from the frontpage in Kirkepostille. Then click on the button `Analyze Page load`, and see the results with your own eyes.

## Install and setup
Read the [release](https://github.com/lovkyndig/kirkepostille/releases)-notes for teaching to setup a repo. Notice that bubblewrap `update removes` all the files from the /app-"folder". Notice my guidelines in [Releases](https://github.com/lovkyndig/kirkepostille/releases) for publishing app on _Google App Store_.

## To do-list (personal notes)
- Move bubblewrap build from root to antoher folder.
- MD-files in offline-mode (in public-folder)
- Insert translate-option before search (from Norwegian to Danish)
- Add MDC-components for use in other Mdc-compoents (tabs)
- Add svg-image in header with text/guide to hear mp3-files with the preaches.
- Sort articles in search-modal after date created
- Change Search-box
  - Use PageFind only on frontpage or in list
  - Use window.find() on /pages/article/[...slug].vue
- Google Search Console - Add Verification methods; HTML tag
- Load only the four newest articles.
- Add mouse-drag-event-handler on PC
- Add dark-light-themetoggle[^5]

## License
[MIT](./LICENSE)

[^1]: Notice! This is an **app** published on the _Google Play Store_. You won't learn how to make an app by copying this repo. You have to read my guidelines on the [Releases](https://github.com/lovkyndig/kirkepostille/releases).
[^2]: Best Practices give one error on all nuxt3-homepages [per 14.04.2023](https://github.com/nuxt/nuxt/discussions/20262). Nothing wrong widt the code in the GitHub-repo.
[^3]: _Content is sized correctly for the viewport_ give somethimes error. I have tried to fix this in app.vue (width the function widthCheck), but am unsure of the effect.
[^4]: Notice only 1 blue issue on the frontpage.
[^5]: Updated 26.April 2023