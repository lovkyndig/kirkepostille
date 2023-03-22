![Kirkepostil](https://raw.githubusercontent.com/lovkyndig/kirkepostille/main/public/preview.png)

# Kirkepostil
Kirkepostil is an clone of [`BlogiNote`](https://github.com/Benbinbin/BlogiNote) from [`Benbinbin`](https://github.com/Benbinbin), that is a hidden treasure, like the treasure in the Bible, hidden for the wise and prudent. Matt 11, 25.

Everyone write about the setup in the readme-file, please go away to read about it, (it's the same everywhere) or google about it - like me, when I started for some months ago on GitHub.

## License
[MIT](./LICENSE)

## PageSpeed Insights (personal notes)
- The website for this depo have 100% Health Score on [ahrefs](https://app.ahrefs.com/)
- The four different performance tests on [PageSpedd Insights](https://pagespeed.web.dev/analysis/https-kirkepostille-vercel-app) gave this results on mobile:
 1. 100% SEO
 2. 100% Best Practices
 3. 90% Accessibility:  
  Background and foreground colors do not have a sufficient contrast ratio.
 4. 62% Performance:  
  Total DOM-elements; 3216 > 1400  
  Maximum Child Elements; 108 > 60  
  Script Evaluation 5446 ms > 
  Server Respons Time 1,88 s
  [Lighthouse Treemap](https://googlechrome.github.io/lighthouse/treemap/?gzip=1#H4sIAAAAAAAACq2X62rkNhSAX2Xwj9LCjMa6W4GldJPSbtkt2c0GCqUMsiRPtPHIU1tONoRAn6YP1ifp8SQLrUcDGWf/DGPLOp/O0bneZ/VVm53cZxvtw1lj+o0L8bKts5PsKsZtd7JcXvv22m2bLvq6dujGtcbVSG+3y2yeVT7o+sjPz3y3rfWds8/fp3vrYzccszOt38ZFbJ3b6O3C6qiH196CpNTaPIs+1g5WL3ars4+Pq7Ozx1XrHnf5JsA3l52zs6ppZ08yZsCHjzrTtCAi9HX99PCkw7vGDqJ9gD0bHf2N24mM2te70wZYhz+/32fmyte2dWH3EPRm2PatD7UP7rvZrQ+2uUWr1a+Xv31crf75628Q07qu6cEIr+/iIANLkhMxz/rQwyGfXuYPf8y/SHuOHZMyH+b3z5axCv3nuDxvm86dI1wJiqmS6FOXkF3wvcMeDQJfbO9QkfOKlwVOcziXAo9QPCd8gl5vANec6taisuJOcpNGKkpGPDXRhj9uEChGKeb2gBH3b/xo0mkTIhjygwvWta5FVrNcFlyniYSyEbJ4MfKdbq/BwQNyWgvLiiKJJgQLNWJjwuTxeAgn9xlp4SopqyoJEyR/uWWtq3RfR4RLoxi1aW9hfKzUBNLws6gbbX1YL0A9b3RsWiSodZblByKD5WM/JZhNtWYBvpjr0qVRkn49R4UqhJgoHeBEmqbU2KRCTOe97x0kGWykVbxMRwUhfGxKwejxxD93KFMqkuP8gCmpKIoxqygmqNfD+w5Jp6x1OA2jIqcjFiWST8xmP6BSMG5Nma4IlI8zy+RA8OEaEie2DCuTDjrCxoqxKZXujWnCad/FZoNKmlOp2IFETb5CkP8HdtM75IqCUZ7TJJDvGXNKwfNA9NVQYbEgRh3wSCX4OFlCxZqQSUrdOVQQrCtGDpQfyffSJVQkPMFR9I1f66GvQ4VUikI6SRdzOc5csphQzruoYTOqmONKVek7A83HdzZFM1N7yFqLJtR3yJWaU8pIOgjEOAYmOOUusn/GiAhrjNPp0ObFOD2+gDT4PnMW7swcaC1fznrqEJysREkPuCLneNzCYskmJEfTbLZNgDvrkNK41CpPJxEuxokfp3qv29tbtG6adQ1zxnqjg15DUweM5Rqel5+677199dPil/z8w2v5Nmfvv6lfDaPQWxi52kRpY5LRsUVxLqk8zjW3cAwY7+zyy590IeV8r6WFiicmhMEKIdTV/Xq164JyY1SSKBlme/VU5oQcT6x9FxHl2ihV8APFez/mcE4VHua0eLcdYP8bTx8eHuYZJOHKry9cjNDd7ebGujF6N7S6sLi8GL76F/lPGLioDwAA)

## To do-list (personal notes)
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

Updated 22.Mars 23