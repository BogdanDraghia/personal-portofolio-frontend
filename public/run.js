(function (slug, url) {
  const iframe = `<iframe  class="widget__frame" style="border:none; width: 100%; height: 100vh; height: -webkit-fill-available;" src="${url}/race/${slug}" scrolling="yes">Iframes not supported</iframe>`;
  const createHtmlStructure = (contents) => {
    return `<div style="width: 100%; height: 100%;">                              ${contents}              </div>`;
  };
  document.write(createHtmlStructure(iframe));
})("carrera-viavox", "https://publicapre.gedsports.com");
