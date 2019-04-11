(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['admin'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"admin-wrapper\" class=\"parallax-wrapper\">\n  <div class=\"project-header\">\n    <div class=\"parallax-image-header parallax-image\"></div>\n    <div class=\"project-header__title\">\n      <h1>Admin</h1>\n    </div>\n  </div>\n  <div class=\"project-intro dark\">\n    <h1>Go behind the scenes</h1>\n    <p>Our science and engineering projects wouldn't be possible without the incredible work put in by our admin teams: internal affairs, external affairs, finance, and marketing. These teams not only enable the projects to thrive, but they facilitate communication and help us engage with our community.</p>\n  </div>\n  <div class=\"parallax-image-header__follow parallax-image\"></div>\n  <div class=\"text-image__container light text-left\">\n    <h1 class=\"title\" id=\"marketing\">Marketing</h1>\n    <div class=\"text-image image-left\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.marketing || (depth0 != null ? depth0.marketing : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"marketing","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"paragraph-container\">\n        <p>Our marketing team focuses on brand management and content generation, working to make the science and engineering accessible to the public. We hope to share our passion for space in a way that inspires and excites those around us.</p>\n        <p>Responsibilities</p>\n        <ul>\n          <li>Manage social media accounts</li>\n          <li>Graphic design and media creation</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"text-image__container dark\">\n    <h1 class=\"title\" id=\"finance\">Finance</h1>\n    <div class=\"text-image\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.finance || (depth0 != null ? depth0.finance : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"finance","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"paragraph-container\">\n        <p>Our finance team tracks the organization's accounts and works to secure additional funding.</p>\n        <p>Responsibilities</p>\n        <ul>\n          <li>Manage accounts with internal spreadsheets and communicate with campus account offices</li>\n          <li>Draft funding proposals</li>\n          <li>Communicate with cooroprate sponsors and facilitate donations</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"text-image__container light\">\n    <h1 class=\"title\" id=\"internalAffairs\">Internal Affairs</h1>\n    <div class=\"text-image image-left\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.internalAffairs || (depth0 != null ? depth0.internalAffairs : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalAffairs","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"paragraph-container\">\n        <p>Our internal affairs team, under the direction of the Internal Vice President, seeks to facilitate social and developmental programs within the organization.</p>\n        <p>In addition to creating a workshop curriculum for incoming members, the team organizes social events like BBQs and rocket launch viewing parties.</p>\n        <p>Responsibilities</p>\n        <ul>\n          <li>Coordinating large groups of people</li>\n          <li>Creating interest forms and engaging members</li>\n          <li>Organizing educational workshops</li>\n      </div>\n    </div>\n  </div>\n  <div class=\"text-image__container dark\">\n    <h1 class=\"title\" id=\"externalAffairs\">External Affairs</h1>\n    <div class=\"text-image\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.externalAffairs || (depth0 != null ? depth0.externalAffairs : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"externalAffairs","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"paragraph-container\">\n        <p>The external affairs team is focused on corporate outreach, community engagement, and recruitment.</p>\n        <p>Responsibilities</p>\n        <ul>\n          <li>Contacting professionals in the aerospace industry and building mutually beneficial relationships</li>\n          <li>Coordinating with UCLA organizations to participate in public outreach events such as Exploring Your Universe, Engineer's Week, and more.</li>\n          <li>Passing out flyers and stationing booths at recruitment events like the Enormous Activities Fair</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
templates['articlesHome'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"article-preview dark\">\n      <div class=\"article-preview__text\">\n        <a href="
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "><h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2></a>\n        <h3>"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</h3>\n        <p>"
    + alias4(((helper = (helper = helpers.preview || (depth0 != null ? depth0.preview : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"preview","hash":{},"data":data}) : helper)))
    + "</p>\n      </div>\n      <div class=\"article-preview__image\">\n        <img src=\""
    + alias4(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page-header\">\n  <h1>Articles Home</h1>\n  <h3>Check out these cool articles on space policy</h3>\n</div>\n<div class=\"article-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.articles : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
templates['footer'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <a href="
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + " target=\"_blank\">\n      <img src="
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + ">\n    </a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"social-media-links\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.socialMedia : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<!-- Begin MailChimp Signup Form -->\n<div id=\"mc_embed_signup\">\n  <form action=\"https://bruinspace.us14.list-manage.com/subscribe/post?u=a0f4954a051d300244e35603a&amp;id=fafda91946\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>\n    <h3>Don't get lost in orbit! Sign up for our newsletter: </h3>\n    <div id=\"mc_embed_signup_scroll\">\n      <!---\n      <div class=\"mc-field-group\">\n        <label for=\"mce-EMAIL\">Email Address </label>\n        <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\">\n      </div>\n      <div id=\"mce-responses\" class=\"clear\">\n        <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\n        <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\n      </div>\n    -->\n      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n      <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\" name=\"b_a0f4954a051d300244e35603a_fafda91946\" tabindex=\"-1\" value=\"\"></div>\n      <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n    </div>\n    <div class=\"contact\">\n      <h3>Questions?</h3>\n      <p>Contact us on <a href=\"https://www.facebook.com/uclaBruinSpace/\">Facebook</a>, at <a href=\"mailto:uclaBruinSpace@gmail.com\">uclaBruinSpace@gmail.com</a>, or come visit our lab in Boelter 8761!</p>\n    </div>\n  </form>\n</div>\n<!--End mc_embed_signup-->\n";
},"useData":true});
templates['forms'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <a class=\"form-card\" href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">\n        <img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"card-container\">\n          <h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n        </div>\n      </a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<main class=\"animatedSlow fadeIn\">\n  <div id=\"forms-wrapper\">\n    <div class=\"project-header\">\n      <div class=\"parallax-image-header parallax-image\"></div>\n      <div class=\"project-header__title\">\n        <h1>Forms</h1>\n      </div>\n    </div>\n    <div class=\"project-intro dark\">\n      <h1>For all your Bruin Space related forms!</h1>\n    </div>\n    <div class=\"parallax-image-header__follow parallax-image\"></div>\n    <div class=\"form-cards__container\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.forms : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n</main>\n";
},"useData":true});
templates['head'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <script type=\"text/javascript\" src="
    + container.escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"link","hash":{},"data":data}) : helper)))
    + "></script>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<title>Bruin Spacecraft Group</title>\n\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\">\n\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\" integrity=\"sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T\" crossorigin=\"anonymous\"></script>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/css?family=Montserrat|Oswald|Roboto\" rel=\"stylesheet\">\n<!--\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.scripts : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "-->\n\n<link rel=\"stylesheet\" href=\""
    + alias4(((helper = (helper = helpers.animate || (depth0 != null ? depth0.animate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"animate","hash":{},"data":data}) : helper)))
    + "\">\n<link rel=\"stylesheet\" type=\"text/css\" href=\""
    + alias4(((helper = (helper = helpers.main || (depth0 != null ? depth0.main : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"main","hash":{},"data":data}) : helper)))
    + "\">\n\n<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\""
    + alias4(((helper = (helper = helpers.favicon || (depth0 != null ? depth0.favicon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data}) : helper)))
    + "/apple-touch-icon.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\""
    + alias4(((helper = (helper = helpers.favicon || (depth0 != null ? depth0.favicon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data}) : helper)))
    + "/favicon-32x32.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\""
    + alias4(((helper = (helper = helpers.favicon || (depth0 != null ? depth0.favicon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data}) : helper)))
    + "/favicon-16x16.png\">\n<link rel=\"manifest\" href=\""
    + alias4(((helper = (helper = helpers.favicon || (depth0 != null ? depth0.favicon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data}) : helper)))
    + "/site.webmanifest\">\n<link rel=\"mask-icon\" href=\""
    + alias4(((helper = (helper = helpers.favicon || (depth0 != null ? depth0.favicon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data}) : helper)))
    + "/safari-pinned-tab.svg\" color=\"#5bbad5\">\n\n<meta charset=\"utf-8\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n<meta name=\"viewport\" content=\"width=device-width, height=device-height, initial-scale=1\">\n<meta name=\"theme-color\" content="
    + alias4(((helper = (helper = helpers.theme_color || (depth0 != null ? depth0.theme_color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theme_color","hash":{},"data":data}) : helper)))
    + "/>\n";
},"useData":true});
templates['index'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "            <li data-target=\"#myCarousel\" data-slide-to=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "class=\"active\"";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <div class=\"carousel-item "
    + alias4(((helper = (helper = helpers.active || (depth0 != null ? depth0.active : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"active","hash":{},"data":data}) : helper)))
    + "\">\n            <img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\">\n            <div class=\"carousel-caption\">\n              <h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n              <a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\"><h3>"
    + alias4(((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtitle","hash":{},"data":data}) : helper)))
    + "</h3></a>\n            </div>\n          </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <a class=\"card\" href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">\n          <img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"card-container\">\n            <img src=\""
    + alias4(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data}) : helper)))
    + "\"></img>\n            <h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n            <p>"
    + alias4(((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtitle","hash":{},"data":data}) : helper)))
    + "</p>\n          </div>\n        </a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"index-wrapper\">\n  <div class=\"video\">\n    <div style=\"position:relative;height:100%;z-index:-1\">\n      <!--\n      <iframe width=\"100%\" src=\"https://www.youtube.com/embed/QGWQyhOfZBY?autoplay=1;rel=0&amp;controls=0&amp;showinfo=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" style=\"position:absolute;width:100%;height:100%;left:0\" allowfullscreen></iframe>\n      -->\n      <!--\n      <iframe width=\"100%\" src=\"https://www.youtube.com/embed/OGKqUmk_g-0?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0&amp;mute=1&amp;loop=1&playlist=OGKqUmk_g-0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" style=\"width:100%;\" allowfullscreen></iframe>\n      -->\n      <video width=\"100%\" autoplay muted loop>\n        <source src=\""
    + alias4(((helper = (helper = helpers["video-link"] || (depth0 != null ? depth0["video-link"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"video-link","hash":{},"data":data}) : helper)))
    + "\" type=\"video/mp4\">\n        HTML video is not supported by your browser.\n      </video>\n\n    </div>\n    <div class=\"caption__container\">\n      <div class=\"caption\">\n        <h1>Welcome</h1>\n        <h3>to Bruin Spacecraft Group</h3>\n      </div>\n    </div>\n    <div class=\"scrollDown\" onclick=\"scrollDown()\">\n      <h3>Scroll Down</h3>\n      <svg class=\"arrows\">\n        <path class=\"a1\" d=\"M0 0 L30 20 L60 0\"></path>\n        <path class=\"a2\" d=\"M0 15 L30 35 L60 15\"></path>\n        <path class=\"a3\" d=\"M0 30 L30 50 L60 30\"></path>\n      </svg>\n    </div>\n    <script>\n      function scrollDown(){\n        console.log(\"HELP\")\n        $(\"html, body\").animate({\n          scrollTop: $('#mission').offset().top}, 1000)\n      }\n    </script>\n  </div>\n\n  <div class=\"main-content-wrapper\">\n    <div id=\"mission\" class=\"paragraph-container light\">\n      <h1>Our Mission</h1>\n      <p>Bruin Spacecraft Group was founded with the intent of providing a creative and supportive environment for space mission design and development at UCLA.\n      Here, students of all backgrounds can come together, united by a passion for space, to do something amazing.\n      Here, we aim to give students the opportunity to acquire the skills necessary to become leaders in the space industry.</p>\n    </div>\n    <!-- NOT READY\n    <div class=\"carousel-wrapper\">\n      <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n        <!-- Indicators >\n        <ul class=\"carousel-indicators\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.slides : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n        <!-- Slides TODO: add img alts?>\n        <div class=\"carousel-inner\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.slides : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n        <!-- Left and right controls >\n        <a class=\"carousel-control-prev\" href=\"#myCarousel\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\"></span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#myCarousel\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\"></span>\n        </a>\n      </div>\n    </div> -->\n\n    <div id=\"whatWeDo\" class=\"dark\">\n      <h1 class=\"title\">What We Do</h1>\n      <div class=\"flex-container\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n    </div>\n    <div class=\"parallax-image-header parallax-image\"></div>\n    <div id=\"counters\" class=\"dark paragraph-container\">\n      <div class=\"countBox\">\n        <div id=\"memberCounter\" class=\"counter\"></div>\n        <h2>Members</h2>\n      </div>\n      <div class=\"countBox\">\n        <div id=\"projectCounter\" class=\"counter\"></div>\n        <h2>Projects</h2>\n      </div>\n      <div class=\"countBox\">\n        <div id=\"ageCounter\" class=\"counter\"></div>\n        <h2>Age of Organization</br>(Years)</h2>\n      </div>\n    </div>\n    <div class=\"parallax-image-header__follow parallax-image\"></div>\n    <div id=\"join\" class=\"paragraph-container light\">\n      <h1>How to Join</h1>\n      <p>\n        Bruin Spacecraft Group is open to any and all majors and minors. All we ask is you come with a passion for space!\n      </p>\n      <p>\n        You don't need to be an engineer to be on a project, and you don't need to study economics to join the finance team.\n      </p>\n      <p>\n        If you want to join us here at Bruin Space, check out the <a href=\""
    + alias4(((helper = (helper = helpers.join || (depth0 != null ? depth0.join : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"join","hash":{},"data":data}) : helper)))
    + "\">Join</a> page for more information.\n      </p>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
templates['join'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"team-wrapper\" class=\"parallax-wrapper\">\n  <div class=\"project-header\">\n    <div class=\"parallax-image-header parallax-image\"></div>\n    <div class=\"project-header__title\">\n      <h1>Join the Team</h1>\n    </div>\n  </div>\n  <div class=\"project-intro dark\">\n    <h1>Learn how you can get involved</h1>\n    <p>Scientist or artist, policy-maker or engineer, our only requirement is a passion for space.</p>\n  </div>\n  <div class=\"parallax-image-header__follow parallax-image\"></div>\n  <div class=\"text-image__container light text-left\">\n    <h1 class=\"title\">Find your Place</h1>\n    <div class=\"text-image image-left\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.yourPlace || (depth0 != null ? depth0.yourPlace : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"yourPlace","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"paragraph-container\">\n        <p>There are many opportunities at Bruin Space, ranging from science and engineering to finance, art, and public relations.</p>\n        <ul>\n          <li>For those interested in spacecraft engineering, consider joining "
    + ((stack1 = ((helper = (helper = helpers.overseer || (depth0 != null ? depth0.overseer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"overseer","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ", "
    + ((stack1 = ((helper = (helper = helpers.reach || (depth0 != null ? depth0.reach : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reach","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ", "
    + ((stack1 = ((helper = (helper = helpers.rapid || (depth0 != null ? depth0.rapid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rapid","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " or "
    + ((stack1 = ((helper = (helper = helpers.sandbox || (depth0 != null ? depth0.sandbox : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sandbox","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".</li>\n          <li>To explore space science, check out "
    + ((stack1 = ((helper = (helper = helpers.endeavour || (depth0 != null ? depth0.endeavour : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endeavour","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".</li>\n          <li>If you want to develop industry contacts, handle corporate relations, and public outreach efforts, consider our "
    + ((stack1 = ((helper = (helper = helpers.externalAffairs || (depth0 != null ? depth0.externalAffairs : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"externalAffairs","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " team.</li>\n          <li>For experience managing accounts and applying for funds, join the "
    + ((stack1 = ((helper = (helper = helpers.finance || (depth0 != null ? depth0.finance : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"finance","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " team.</li>\n          <li>If you are looking for a way to express your passion for space through art or share your excitement with the world, check out our "
    + ((stack1 = ((helper = (helper = helpers.marketing || (depth0 != null ? depth0.marketing : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"marketing","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " team.</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"text-image__container dark\">\n    <h1 class=\"title\">How to Join</h1>\n    <div class=\"text-image\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.join || (depth0 != null ? depth0.join : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"join","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"paragraph-container\">\n        <p>Here are a few things you need to do to get started:</p>\n        <ul>\n          <li>Join our <a href=\"#slack\">slack</a> team, and consider downloading <a href=\"https://slack.com/downloads/\">the app</a>. Slack's a pretty big deal here!</li>\n          <li>Join our <a href=\"#mc_embed_signup\">mailing list</a>, for biweekly updates and opportunities.</li>\n          <li>Complete <a href=\"https://worksafe.ucla.edu/UCLA/Programs/Standard/Control/elmLearner.wml?portalid=Learnerweb\">lab safety training</a> through UCLA's EH&amp;S department.</li>\n          <li>Attend a meeting!\n            <ul><li>General meetings are a perfect introduction to the organization as a whole, but we encourage you to attend a project meeting and get a firsthand look at what it is we do.</li>\n            <li>For a schedule of all Bruin Space meetings, check out our "
    + ((stack1 = ((helper = (helper = helpers.calendar || (depth0 != null ? depth0.calendar : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"calendar","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".</li></ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"text-image__container light\">\n    <h1 class=\"title\" id=\"slack\">Slack</h1>\n    <div class=\"text-image image-left\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.slack || (depth0 != null ? depth0.slack : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slack","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"paragraph-container\">\n        <p>\n          <a href=\"https://slack.com\">Slack</a> is a communication platform built for teams.\n          Channels allow information to be exchanged with those it impacts the most.\n          You'll automatically be added to <code>#bruinspace</code>, where all official, group-wide communication happens, and <code>#deorbit</code>, where we share space news, organize social events and stuff!\n        </p>\n        <p>\n          Our slack domain, <a href=\"https://bruinspace.slack.com\">bruinspace.slack.com</a>, is accessible to anyone with a UCLA email. If you don't have a UCLA email, just message us on <a href=\"https://www.facebook.com/uclaBruinSpace/\">Facebook</a> or shoot us an <a href=\"mailto:uclaBruinSpace@gmail.com\">email</a> and we'll get you set up!\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
templates['navBar'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      "
    + ((stack1 = ((helper = (helper = helpers.element || (depth0 != null ? depth0.element : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"element","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a class=\"brand\" href=\""
    + alias4(((helper = (helper = helpers.home || (depth0 != null ? depth0.home : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home","hash":{},"data":data}) : helper)))
    + "\">\n  <img src=\""
    + alias4(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data}) : helper)))
    + "\">\n</a>\n<nav class=\"site-nav\" role=\"navigation\">\n  <ul class=\"site-nav__list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.links : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n</nav>\n<button class=\"mob-nav__burger\" id=\"MobMenuToggle\" onclick=\"\">\n  <img id=\"burger\" src=\""
    + alias4(((helper = (helper = helpers.burger || (depth0 != null ? depth0.burger : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"burger","hash":{},"data":data}) : helper)))
    + "\">\n</button>\n";
},"useData":true});
templates['navMenu'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      "
    + ((stack1 = ((helper = (helper = helpers.element || (depth0 != null ? depth0.element : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"element","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <ul id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"mob-nav__menu mob-nav__menu--children mob-nav__menu--closed\" data-parent=\"MobNavMain\" data-menu=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.subMenuLinks : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        "
    + ((stack1 = ((helper = (helper = helpers.element || (depth0 != null ? depth0.element : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"element","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<nav class=\"mob-nav mob-nav--closed\" id=\"MobMenu\">\n  <ul id=\"MobNavMain\" data-menu=\"menu0\" class=\"mob-nav__menu mob-nav__menu--parent\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.links : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.subMenus : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</nav>\n";
},"useData":true});
templates['notif'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"notif-banner\">\n  <span id=\"close-banner\" onclick=\"close_notif()\">&times;</span>\n  <script>\n    function close_notif() {\n      document.getElementsByClassName('notif-banner')[0].style.display = \"none\";\n    }\n  </script>\n  <div class=\"notif-container\">\n    <p class=\"notif-text\">\n      Reminder: Don't miss our first General Meeting this Thursday!\n    </p>\n  </div>\n</div>";
},"useData":true});
templates['our_team'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"officer-card dark\">\n          <div class=\"card-cover\">\n            <img src=\""
    + alias4(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data}) : helper)))
    + "\"></img>\n            <div class=\"card-caption\">\n              <h3>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n              <p>"
    + alias4(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n          </div>\n          <div class=\"card-detail\">\n            <h2>About Me</h2>\n            <div class=\"officer-about\">\n              "
    + ((stack1 = ((helper = (helper = helpers.about || (depth0 != null ? depth0.about : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"about","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n            <a href="
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + " target=\"_blank\">\n              <img src="
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + ">\n            </a>\n          </div>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      <h1>PROJECT</h1>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div id=\"team-wrapper\" class=\"parallax-wrapper\">\n  <div class=\"project-header\">\n    <div class=\"parallax-image-header parallax-image\"></div>\n    <div class=\"project-header__title\">\n      <h1>Our Team</h1>\n    </div>\n  </div>\n  <div class=\"project-intro dark\">\n    <h1>Who makes up Bruin Space?</h1>\n    <p>It takes all backgrounds to build a spacecraft, and with over 60 members, we've got a wide variety.</p>\n  </div>\n  <div class=\"parallax-image-header__follow parallax-image\"></div>\n  <div class=\"project-description light\">\n    <h1 class=\"title\">The Officers</h1>\n    <div class=\"project-description__content\">\n      <!--<img src=\""
    + container.escapeExpression(((helper = (helper = helpers.officersPhoto || (depth0 != null ? depth0.officersPhoto : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"officersPhoto","hash":{},"data":data}) : helper)))
    + "\">-->\n      <p class=\"paragraph-container\">\n        Bruin Space is run by a board of five officers: President, Interal Vice President, External Vice President, Vice President of Marketing, and Vice President of Finance.\n      </p>\n    </div>\n    <div class=\"officer-cards__container\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.officers : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n  <!--\n  <div class=\"team-wrapper\">\n    <div class=\"title\">\n      <h1>The Projects</h1>\n      <p>A quick look at the teams</p>\n    </div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.teams : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"parallax-image-2 parallax-image\"></div>\n  -->\n</div>\n";
},"useData":true});
templates['project'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "				<h2>Chief Engineer</h2>\n				<p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ce : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>\n				<p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ce : depth0)) != null ? stack1.major : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ce : depth0)) != null ? stack1.year : stack1), depth0))
    + "</p>\n				<a href=\"mailto:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ce : depth0)) != null ? stack1.email : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ce : depth0)) != null ? stack1.email : stack1), depth0))
    + "</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<div class=\"mission-wrapper\" id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mission : depth0)) != null ? stack1.title : stack1), depth0))
    + "\">\n		<div class=\"title\">\n			<h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mission : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>\n			<p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.mission : depth0)) != null ? stack1.subtitle : stack1), depth0))
    + "</p>\n		</div>\n		<div class=\"mission-description\">\n			<p class=\"paragraph-container\">\n				"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.mission : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "\n			</p>\n		</div>\n		<div class=\"scrollable-content\">\n			<div class=\"scrollable-content__textboxes\">\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.mission : depth0)) != null ? stack1.scrollables : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n			<div class=\"scrollable-content__images\">\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.mission : depth0)) != null ? stack1.scrollables : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n			<script type=\"text/javascript\" src=\""
    + alias2(((helper = (helper = helpers.missionWidgetJS || (depth0 != null ? depth0.missionWidgetJS : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias3,{"name":"missionWidgetJS","hash":{},"data":data}) : helper)))
    + "\"></script>\n		</div>\n	</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<div id=\"mission"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"scrollable-content__textbox\" data-image=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n						<h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n						<p>\n							"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\n						</p>\n					</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<img id=\"mission"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "_image\" data-image=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" src=\""
    + alias4(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data}) : helper)))
    + "\">\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"past-projects dark\">\n			<h1 class=\"title\">Past Work</h1>\n			<div class=\"past-projects__content\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.past_work : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<div class=\"text-image__container light "
    + ((stack1 = (helpers.if_even || (depth0 && depth0.if_even) || alias2).call(alias1,(data && data.index),{"name":"if_even","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n				    <h1 class=\"title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n				    <div class=\"text-image "
    + ((stack1 = (helpers.if_even || (depth0 && depth0.if_even) || alias2).call(alias1,(data && data.index),{"name":"if_even","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n				      <img src=\""
    + alias4(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data}) : helper)))
    + "\">\n				      <div class=\"paragraph-container\">\n				        "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\n				      </div>\n				    </div>\n				  </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "text-left";
},"12":function(container,depth0,helpers,partials,data) {
    return "text-right";
},"14":function(container,depth0,helpers,partials,data) {
    return "image-left";
},"16":function(container,depth0,helpers,partials,data) {
    return "image-right";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<h1>Project Timeline</h1>\n		<ul class=\"timeline light\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.project_timeline : depth0),{"name":"each","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</ul>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "				<li "
    + ((stack1 = (helpers.if_even || (depth0 && depth0.if_even) || alias2).call(alias1,(data && data.index),{"name":"if_even","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(22, data, 0),"data":data})) != null ? stack1 : "")
    + ">\n					<div class=\"timeline-badge\"><i class=\"glyphicon\"></i></div>\n					<div class=\"timeline-panel\">\n						<div class=\"timeline-heading\">\n              <h4 class=\"timeline-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n						</div>\n						<ul class=\"timeline-body\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						</ul>\n					</div>\n				</li>\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "";
},"22":function(container,depth0,helpers,partials,data) {
    return "class=\"timeline-inverted\"";
},"24":function(container,depth0,helpers,partials,data) {
    var helper;

  return "								<li>"
    + container.escapeExpression(((helper = (helper = helpers.item || (depth0 != null ? depth0.item : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"item","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.project || (depth0 != null ? depth0.project : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project","hash":{},"data":data}) : helper)))
    + "-wrapper\" class=\"parallax-wrapper\">\n	<div class=\"project-header\">\n		<div class=\"parallax-image-header parallax-image\"></div>\n		<div class=\"project-header__title\">\n			<h1>"
    + alias4(((helper = (helper = helpers.project || (depth0 != null ? depth0.project : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project","hash":{},"data":data}) : helper)))
    + "</h1>\n		</div>\n	</div>\n	<div class=\"project-intro dark\">\n		<h1>"
    + alias4(((helper = (helper = helpers.project_title || (depth0 != null ? depth0.project_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_title","hash":{},"data":data}) : helper)))
    + "</h1>\n		<p>"
    + alias4(((helper = (helper = helpers.project_subtitle || (depth0 != null ? depth0.project_subtitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_subtitle","hash":{},"data":data}) : helper)))
    + "</p>\n	</div>\n	<div class=\"parallax-image-header__follow parallax-image\"></div>\n	<div class=\"project-description dark\">\n		<h1 class=\"title\">The Project</h1>\n		<div class=\"project-description__content\">\n			<div class=\"image-container\">\n				<img src=\""
    + alias4(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data}) : helper)))
    + "\">\n			</div>\n			<p class=\"paragraph-container\">\n				"
    + alias4(((helper = (helper = helpers.project_description || (depth0 != null ? depth0.project_description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_description","hash":{},"data":data}) : helper)))
    + "\n			</p>\n		</div>\n	</div>\n	<div class=\"team-description light\">\n		<h1 class=\"title\">The Team</h1>\n		<div class=\"team-description__content\">\n			<div class=\"image-container\">\n				<img src=\""
    + alias4(((helper = (helper = helpers.team_photo || (depth0 != null ? depth0.team_photo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"team_photo","hash":{},"data":data}) : helper)))
    + "\">\n			</div>\n			<div class=\"pm-bio paragraph-container\">\n				<h2>Project Manager</h2>\n				<p>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.pm : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>\n				<p>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.pm : depth0)) != null ? stack1.major : stack1), depth0))
    + ", "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.pm : depth0)) != null ? stack1.year : stack1), depth0))
    + "</p>\n				<a href=\"mailto:"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.pm : depth0)) != null ? stack1.email : stack1), depth0))
    + "\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.pm : depth0)) != null ? stack1.email : stack1), depth0))
    + "</a>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.ce : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</div>\n	</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.mission : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.past_work : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.project_timeline : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<div class=\"parallax-image-2 parallax-image\"></div>\n</div>\n";
},"useData":true});
templates['sponsor'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"sponsor-wrapper\" class=\"parallax-wrapper\">\n  <div class=\"project-header\">\n    <div class=\"parallax-image-header parallax-image\"></div>\n    <div class=\"project-header__title\">\n      <h1>Sponsor Us</h1>\n    </div>\n  </div>\n  <div class=\"project-intro dark\">\n    <h1>Help us take this to the next level</h1>\n  </div>\n  <div class=\"parallax-image-header__follow parallax-image\"></div>\n  <div class=\"text-image__container light\">\n    <h1 class=\"title\">Why Bruin Space?</h1>\n    <div class=\"text-image\">\n      <video width=\"100%\" autoplay muted loop>\n        <source src=\""
    + container.escapeExpression(((helper = (helper = helpers["video-link"] || (depth0 != null ? depth0["video-link"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"video-link","hash":{},"data":data}) : helper)))
    + "\" type=\"video/mp4\">\n        HTML video is not supported by your browser.\n      </video>\n      <div class=\"paragraph-container\">\n        <ul>\n          <li>We are a young organization, looking for companies to build lasting relationships with.</li>\n          <li>We are rapidly expanding, getting more students involved from all over campus.</li>\n          <li>Plus, space is cool! Help us share our passion!</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"paragraph-container dark\">\n    <h1 class=\"title\">Here are the details</h1>\n    <div class=\"paragraph-container\">\n      <p>Donations to the Bruin Spacecraft Group are tax deductible and are accompanied with the following benefits:</p>\n      <ul>\n        <li>Donors can choose for their gift to be made to a specific project or to Bruin Space directly</li>\n        <li>Hardware donations will be assigned a monetary value based off the average market price for the item, and will count towards the donors’ gift total</li>\n        <li>Donation totals for funding levels (below) are considered by academic year</li>\n        <li>Donors will be given priority for campus events (talks, info-sessions, resume collections, tech-talks, etc.)</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"paragraph-container light\">\n    <h3>Bruin Space has four funding levels, each with distinct benefits. Each level also includes benefits of those underneath.</h3>\n  </div>\n  <div class=\"sponsorship-level\">\n    <h2 class=\"title\"><span style=\"font-weight:bold\">Voyager </span> $5000 and up</h2>\n    <ul>\n      <li>Publicized recruiting event</li>\n      <li>Logo on select flight hardware</li>\n    </ul>\n  </div>\n  <div class=\"sponsorship-level\">\n    <h2 class=\"title\"><span style=\"font-weight:bold\">Pioneer </span> $2500 - $4999</h2>\n    <ul>\n      <li>Posts on social media</li>\n    </ul>\n  </div>\n  <div class=\"sponsorship-level\">\n    <h2 class=\"title\"><span style=\"font-weight:bold\">Mariner </span> $500 - $2499</h2>\n    <ul>\n      <li>Access to the Bruin Space resume book</li>\n      <li>Swag distributed in the Bruin Space lab</li>\n    </ul>\n  </div>\n  <div class=\"sponsorship-level\">\n    <h2 class=\"title\"><span style=\"font-weight: bold\">Explorer </span> Up to $499</h2>\n    <ul>\n      <li>Recruiting post in the Bruin Space newsletter</li>\n      <li>Logo on the Bruin Space website</li>\n    </ul>\n  </div>\n  <div class=\"paragraph-container dark\">\n    <a class=\"button\" href=\"https://drive.google.com/file/d/1FrhBgh3YwD9OpEmQoXfNsleSXdl2-K2m/view\" target=\"_blank\">Become a Sponsor!</a>\n    <p>For any inquiries, contact uclabruinspace@gmail.com to get in touch with us, and we would be happy to negotiate the terms of your sponsorship.</p>\n  </div>\n</div>\n";
},"useData":true});
templates['test'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div>\nMy name is "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + ". I am a "
    + alias4(((helper = (helper = helpers.occupation || (depth0 != null ? depth0.occupation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"occupation","hash":{},"data":data}) : helper)))
    + "\n</div>\n";
},"useData":true});
})();