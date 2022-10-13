/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={597:()=>{},776:(t,e,n)=>{"use strict";const r=flarum.core.compat["forum/app"];var o=n.n(r);const a=flarum.core.compat["common/Model"];var s=n.n(a);const i=flarum.core.compat["common/models/Discussion"];var c=n.n(i);const u=flarum.core.compat["forum/components/IndexPage"];var l=n.n(u);function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function f(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,d(t,e)}const p=flarum.core.compat["common/utils/computed"];var h=n.n(p),g=function(t){function e(){return t.apply(this,arguments)||this}f(e,t);var n=e.prototype;return n.name=function(){return s().attribute("name").call(this)},n.slug=function(){return s().attribute("slug").call(this)},n.description=function(){return s().attribute("description").call(this)},n.color=function(){return s().attribute("color").call(this)},n.backgroundUrl=function(){return s().attribute("backgroundUrl").call(this)},n.backgroundMode=function(){return s().attribute("backgroundMode").call(this)},n.icon=function(){return s().attribute("icon").call(this)},n.position=function(){return s().attribute("position").call(this)},n.parent=function(){return s().hasOne("parent").call(this)},n.children=function(){return s().hasMany("children").call(this)},n.defaultSort=function(){return s().attribute("defaultSort").call(this)},n.isChild=function(){return s().attribute("isChild").call(this)},n.isHidden=function(){return s().attribute("isHidden").call(this)},n.discussionCount=function(){return s().attribute("discussionCount").call(this)},n.lastPostedAt=function(){return s().attribute("lastPostedAt",s().transformDate).call(this)},n.lastPostedDiscussion=function(){return s().hasOne("lastPostedDiscussion").call(this)},n.isRestricted=function(){return s().attribute("isRestricted").call(this)},n.canStartDiscussion=function(){return s().attribute("canStartDiscussion").call(this)},n.canAddToDiscussion=function(){return s().attribute("canAddToDiscussion").call(this)},n.isPrimary=function(){return h()("position","parent",(function(t,e){return null!==t&&!1===e})).call(this)},e}(s());const v=flarum.core.compat["common/components/Page"];var y=n.n(v);const b=flarum.core.compat["common/components/Link"];var T=n.n(b);const x=flarum.core.compat["common/components/LoadingIndicator"];var _=n.n(x);const w=flarum.core.compat["common/helpers/listItems"];var N=n.n(w);const L=flarum.core.compat["common/helpers/humanTime"];var P=n.n(L);const I=flarum.core.compat["common/utils/classList"];var S=n.n(I);function C(t,e,n){void 0===e&&(e={}),void 0===n&&(n={});var r=t&&t.icon(),o=n.useColor,a=void 0===o||o;return e.className=S()([e.className,"icon",r?t.icon():"TagIcon"]),t&&a?(e.style=e.style||{},e.style["--color"]=t.color(),r&&(e.style.color=t.color())):t||(e.className+=" untagged"),r?m("i",e):m("span",e)}const k=flarum.core.compat["common/utils/extract"];var D=n.n(k);function O(t,e){void 0===e&&(e={}),e.style=e.style||{},e.className="TagLabel "+(e.className||"");var n=D()(e,"link"),r=t?t.name():app.translator.trans("flarum-tags.lib.deleted_tag_text");if(t){var o=t.color();o&&(e.style["--tag-bg"]=o,e.className+=" colored"),n&&(e.title=t.description()||"",e.href=app.route("tag",{tags:t.slug()})),t.isChild()&&(e.className+=" TagLabel--child")}else e.className+=" untagged";return m(n?T():"span",e,m("span",{className:"TagLabel-text"},t&&t.icon()&&C(t,{},{useColor:!1})," ",r))}function E(t){return t.slice(0).sort((function(t,e){var n=t.position(),r=e.position();if(null===n&&null===r)return e.discussionCount()-t.discussionCount();if(null===r)return-1;if(null===n)return 1;var o=t.parent(),a=e.parent();return o===a?n-r:o&&a?o.position()-a.position():o?o===e?1:o.position()-r:a?a===t?-1:n-a.position():0}))}var A=function(t){function e(){return t.apply(this,arguments)||this}f(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),app.history.push("tags",app.translator.trans("flarum-tags.forum.header.back_to_tags_tooltip")),this.tags=[];var r=app.preloadedApiDocument();r?this.tags=E(r.filter((function(t){return!t.isChild()}))):(this.loading=!0,app.tagList.load(["children","lastPostedDiscussion","parent"]).then((function(){n.tags=E(app.store.all("tags").filter((function(t){return!t.isChild()}))),n.loading=!1,m.redraw()})))},n.view=function(){if(this.loading)return m(_(),null);var t=this.tags.filter((function(t){return null!==t.position()})),e=this.tags.filter((function(t){return null===t.position()}));return m("div",{className:"TagsPage"},l().prototype.hero(),m("div",{className:"container"},m("nav",{className:"TagsPage-nav IndexPage-nav sideNav"},m("ul",null,N()(l().prototype.sidebarItems().toArray()))),m("div",{className:"TagsPage-content sideNavOffset"},m("ul",{className:"TagTiles"},t.map((function(t){var e=t.lastPostedDiscussion(),n=E(t.children()||[]);return m("li",{className:"TagTile "+(t.color()?"colored":""),style:{"--tag-bg":t.color()}},m(T(),{className:"TagTile-info",href:app.route.tag(t)},t.icon()&&C(t,{},{useColor:!1}),m("h3",{className:"TagTile-name"},t.name()),m("p",{className:"TagTile-description"},t.description()),n?m("div",{className:"TagTile-children"},n.map((function(t){return[m(T(),{href:app.route.tag(t)},t.name())," "]}))):""),e?m(T(),{className:"TagTile-lastPostedDiscussion",href:app.route.discussion(e,e.lastPostNumber())},m("span",{className:"TagTile-lastPostedDiscussion-title"},e.title()),P()(e.lastPostedAt())):m("span",{className:"TagTile-lastPostedDiscussion"}))}))),e.length?m("div",{className:"TagCloud"},e.map((function(t){return[O(t,{link:!0})," "]}))):"")))},n.oncreate=function(e){t.prototype.oncreate.call(this,e),app.setTitle(app.translator.trans("flarum-tags.forum.all_tags.meta_title_text")),app.setTitleCount(0)},e}(y());const j=flarum.core.compat["forum/components/EventPost"];function M(t,e){void 0===e&&(e={});var n=[],r=D()(e,"link");return e.className="TagsLabel "+(e.className||""),t?E(t).forEach((function(e){(e||1===t.length)&&n.push(O(e,{link:r}))})):n.push(O()),m("span",e,n)}var R=function(t){function e(){return t.apply(this,arguments)||this}f(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e);var n=e.post.content()[0],r=e.post.content()[1];function o(t,e){return t.filter((function(t){return-1===e.indexOf(t)})).map((function(t){return app.store.getById("tags",t)}))}e.tagsAdded=o(r,n),e.tagsRemoved=o(n,r)};var n=e.prototype;return n.icon=function(){return"fas fa-tag"},n.descriptionKey=function(){return this.attrs.tagsAdded.length?this.attrs.tagsRemoved.length?"flarum-tags.forum.post_stream.added_and_removed_tags_text":"flarum-tags.forum.post_stream.added_tags_text":"flarum-tags.forum.post_stream.removed_tags_text"},n.descriptionData=function(){var t={};return this.attrs.tagsAdded.length&&(t.tagsAdded=app.translator.trans("flarum-tags.forum.post_stream.tags_text",{tags:M(this.attrs.tagsAdded,{link:!0}),count:this.attrs.tagsAdded.length})),this.attrs.tagsRemoved.length&&(t.tagsRemoved=app.translator.trans("flarum-tags.forum.post_stream.tags_text",{tags:M(this.attrs.tagsRemoved,{link:!0}),count:this.attrs.tagsRemoved.length})),t},e}(n.n(j)());function q(t,e,n,r,o,a,s){try{var i=t[a](s),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var B=n(357),H=n.n(B),F=function(){function t(){this.loadedIncludes=new Set}return t.prototype.load=function(){var t,e=(t=H().mark((function t(e){var n,r=this;return H().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e&&(e=[]),0!==(n=e.filter((function(t){return!r.loadedIncludes.has(t)}))).length){t.next=4;break}return t.abrupt("return",Promise.resolve(o().store.all("tags")));case 4:return t.abrupt("return",o().store.find("tags",{include:n.join(",")}).then((function(t){return n.forEach((function(t){return r.loadedIncludes.add(t)})),t})));case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function s(t){q(a,r,o,s,i,"next",t)}function i(t){q(a,r,o,s,i,"throw",t)}s(void 0)}))});return function(t){return e.apply(this,arguments)}}(),t}();const G=flarum.core.compat["common/extend"],K=flarum.core.compat["common/components/Separator"];var $=n.n(K);const U=flarum.core.compat["common/components/LinkButton"];var Y=n.n(U),z=function(t){function e(){return t.apply(this,arguments)||this}return f(e,t),e.prototype.view=function(t){var e=this.attrs.model,n=(this.constructor.isActive(this.attrs),e&&e.description()),r=S()(["TagLinkButton","hasIcon",this.attrs.className,e.isChild()&&"child"]);return m(T(),{className:r,href:this.attrs.route,style:e?{"--color":e.color()}:"",title:n||""},C(e,{className:"Button-icon"}),m("span",{className:"Button-label"},e?e.name():app.translator.trans("flarum-tags.forum.index.untagged_link")))},e.initAttrs=function(e){t.initAttrs.call(this,e);var n=e.model;e.params.tags=n?n.slug():"untagged",e.route=app.route("tag",e.params)},e}(Y());function J(){(0,G.extend)(l().prototype,"navItems",(function(t){if(t.add("tags",m(Y(),{icon:"fas fa-th-large",href:app.route("tags")},app.translator.trans("flarum-tags.forum.index.tags_link")),-10),!app.current.matches(A)){t.add("separator",$().component(),-12);var e=app.search.stickyParams(),n=app.store.all("tags"),r=this.currentTag(),o=function(n){var o=r===n;!o&&r&&(o=r.parent()===n),t.add("tag"+n.id(),z.component({model:n,params:e,active:o},null==n?void 0:n.name()),-14)};E(n).filter((function(t){return null!==t.position()&&(!t.isChild()||r&&(t.parent()===r||t.parent()===r.parent()))})).forEach(o),n.filter((function(t){return null===t.position()})).sort((function(t,e){return e.discussionCount()-t.discussionCount()})).forEach(o)}}))}const Q=flarum.core.compat["forum/states/DiscussionListState"];var V=n.n(Q);const W=flarum.core.compat["forum/states/GlobalSearchState"];var X=n.n(W);const Z=flarum.core.compat["common/Component"];var tt=n.n(Z),et=function(t){function e(){return t.apply(this,arguments)||this}return f(e,t),e.prototype.view=function(){var t=this.attrs.model,e=t.color();return m("header",{className:"Hero TagHero"+(e?" TagHero--colored":""),style:e?{"--hero-bg":e}:""},m("div",{className:"container"},m("div",{className:"containerNarrow"},m("h2",{className:"Hero-title"},t.icon()&&C(t,{},{useColor:!1})," ",t.name()),m("div",{className:"Hero-subtitle"},t.description()))))},e}(tt()),nt=function(t){return o().store.all("tags").find((function(e){return 0===e.slug().localeCompare(t,void 0,{sensitivity:"base"})}))};function rt(){l().prototype.currentTag=function(){var t=this;if(this.currentActiveTag)return this.currentActiveTag;var e=o().search.params().tags,n=null;if(e&&(n=nt(e)),e&&!n||n&&!n.isChild()&&!n.children()){if(this.currentTagLoading)return;this.currentTagLoading=!0,o().store.find("tags",e,{include:"children,children.parent,parent,state"}).then((function(){t.currentActiveTag=nt(e),m.redraw()})).finally((function(){t.currentTagLoading=!1}))}return n?(this.currentActiveTag=n,this.currentActiveTag):void 0},(0,G.override)(l().prototype,"hero",(function(t){var e=this.currentTag();return e?m(et,{model:e}):t()})),(0,G.extend)(l().prototype,"view",(function(t){var e=this.currentTag();e&&(t.attrs.className+=" IndexPage--tag"+e.id())})),(0,G.extend)(l().prototype,"setTitle",(function(){var t=this.currentTag();t&&o().setTitle(t.name())})),(0,G.extend)(l().prototype,"sidebarItems",(function(t){var e=this.currentTag();if(e){var n=e.color(),r=e.canStartDiscussion()||!o().session.user,a=t.get("newDiscussion");n&&(a.attrs.className=S()([a.attrs.className,"Button--tagColored"]),a.attrs.style={"--color":n}),a.attrs.disabled=!r,a.children=o().translator.trans(r?"core.forum.index.start_discussion_button":"core.forum.index.cannot_start_discussion_button")}})),(0,G.extend)(X().prototype,"params",(function(t){t.tags=m.route.param("tags")})),(0,G.extend)(V().prototype,"requestParams",(function(t){var e;if("string"==typeof t.include?t.include=[t.include]:null==(e=t.include)||e.push("tags","tags.parent"),this.params.tags){var n,r=null!=(n=t.filter)?n:{};r.tag=this.params.tags;var o=r.q;o&&(r.q=o+" tag:"+this.params.tags),t.filter=r}}))}const ot=flarum.core.compat["forum/components/DiscussionListItem"];var at=n.n(ot);const st=flarum.core.compat["forum/components/DiscussionHero"];var it=n.n(st);function ct(){(0,G.extend)(at().prototype,"infoItems",(function(t){var e=this.attrs.discussion.tags();e&&e.length&&t.add("tags",M(e),10)})),(0,G.extend)(it().prototype,"view",(function(t){var e=E(this.attrs.discussion.tags());if(e&&e.length){var n=e[0].color();n&&(t.attrs.style={"--hero-bg":n},t.attrs.className+=" DiscussionHero--colored")}})),(0,G.extend)(it().prototype,"items",(function(t){var e=this.attrs.discussion.tags();e&&e.length&&t.add("tags",M(e,{link:!0}),5)}))}const ut=flarum.core.compat["forum/utils/DiscussionControls"];var lt=n.n(ut);const mt=flarum.core.compat["common/components/Button"];var dt=n.n(mt);const ft=flarum.core.compat["common/components/Modal"];var pt=n.n(ft);const ht=flarum.core.compat["forum/components/DiscussionPage"];var gt=n.n(ht);const vt=flarum.core.compat["common/helpers/highlight"];var yt=n.n(vt);const bt=flarum.core.compat["common/utils/extractText"];var Tt=n.n(bt);const xt=flarum.core.compat["forum/utils/KeyboardNavigatable"];var _t=n.n(xt);const wt=flarum.core.compat["common/utils/Stream"];var Nt=n.n(wt);function Lt(t){var e=app.store.all("tags");return t?e.filter((function(e){return e.canAddToDiscussion()||-1!==t.tags().indexOf(e)})):e.filter((function(t){return t.canStartDiscussion()}))}var Pt=["className","isToggled"],It=function(t){function e(){return t.apply(this,arguments)||this}return f(e,t),e.prototype.view=function(t){var e=this.attrs,n=e.className,r=e.isToggled,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(e,Pt),a=r?"far fa-check-circle":"far fa-circle";return m(dt(),Object.assign({},o,{icon:a,className:S()([n,r&&"Button--toggled"])}),t.children)},e}(tt()),St=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).tagsLoading=!0,e.selected=[],e.filter=Nt()(""),e.focused=!1,e.minPrimary=o().forum.attribute("minPrimaryTags"),e.maxPrimary=o().forum.attribute("maxPrimaryTags"),e.minSecondary=o().forum.attribute("minSecondaryTags"),e.maxSecondary=o().forum.attribute("maxSecondaryTags"),e.bypassReqs=!1,e.navigator=new(_t()),e.tags=void 0,e.selectedTag=void 0,e}f(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.navigator.onUp((function(){return n.setIndex(n.getCurrentNumericIndex()-1,!0)})).onDown((function(){return n.setIndex(n.getCurrentNumericIndex()+1,!0)})).onSelect(this.select.bind(this)).onRemove((function(){return n.selected.splice(n.selected.length-1,1)})),o().tagList.load(["parent"]).then((function(){var t;n.tagsLoading=!1;var e=E(Lt(n.attrs.discussion));n.tags=e;var r=null==(t=n.attrs.discussion)?void 0:t.tags();n.attrs.selectedTags?n.attrs.selectedTags.map(n.addTag.bind(n)):r&&r.forEach((function(t){return t&&n.addTag(t)})),n.selectedTag=e[0],m.redraw()}))},n.primaryCount=function(){return this.selected.filter((function(t){return t.isPrimary()})).length},n.secondaryCount=function(){return this.selected.filter((function(t){return!t.isPrimary()})).length},n.addTag=function(t){if(t.canStartDiscussion()){var e=t.parent();e&&!this.selected.includes(e)&&this.selected.push(e),this.selected.includes(t)||this.selected.push(t)}},n.removeTag=function(t){var e=this.selected.indexOf(t);-1!==e&&(this.selected.splice(e,1),this.selected.filter((function(e){return e.parent()===t})).forEach(this.removeTag.bind(this)))},n.className=function(){return"TagDiscussionModal"},n.title=function(){return this.attrs.discussion?o().translator.trans("flarum-tags.forum.choose_tags.edit_title",{title:m("em",null,this.attrs.discussion.title())}):o().translator.trans("flarum-tags.forum.choose_tags.title")},n.getInstruction=function(t,e){if(this.bypassReqs)return"";if(t<this.minPrimary){var n=this.minPrimary-t;return o().translator.trans("flarum-tags.forum.choose_tags.choose_primary_placeholder",{count:n})}if(e<this.minSecondary){var r=this.minSecondary-e;return o().translator.trans("flarum-tags.forum.choose_tags.choose_secondary_placeholder",{count:r})}return""},n.content=function(){var t=this;if(this.tagsLoading||!this.tags)return m(_(),null);var e=this.tags,n=this.filter().toLowerCase(),r=this.primaryCount(),a=this.secondaryCount();e=e.filter((function(e){var n=e.parent();return null!==n&&(!1===n||t.selected.includes(n))})),r>=this.maxPrimary&&!this.bypassReqs&&(e=e.filter((function(e){return!e.isPrimary()||t.selected.includes(e)}))),a>=this.maxSecondary&&!this.bypassReqs&&(e=e.filter((function(e){return e.isPrimary()||t.selected.includes(e)}))),n&&(e=e.filter((function(t){return t.name().substr(0,n.length).toLowerCase()===n}))),this.selectedTag&&e.includes(this.selectedTag)||(this.selectedTag=e[0]);var s=Math.max(Tt()(this.getInstruction(r,a)).length,this.filter().length);return[m("div",{className:"Modal-body"},m("div",{className:"TagDiscussionModal-form"},m("div",{className:"TagDiscussionModal-form-input"},m("div",{className:"TagsInput FormControl "+(this.focused?"focus":""),onclick:function(){return t.$(".TagsInput input").focus()}},m("span",{className:"TagsInput-selected"},this.selected.map((function(e){return m("span",{className:"TagsInput-tag",onclick:function(){t.removeTag(e),t.onready()}},O(e))}))),m("input",{className:"FormControl",placeholder:Tt()(this.getInstruction(r,a)),bidi:this.filter,style:{width:s+"ch"},onkeydown:this.navigator.navigate.bind(this.navigator),onfocus:function(){return t.focused=!0},onblur:function(){return t.focused=!1}}))),m("div",{className:"TagDiscussionModal-form-submit App-primaryControl"},m(dt(),{type:"submit",className:"Button Button--primary",disabled:!this.meetsRequirements(r,a),icon:"fas fa-check"},o().translator.trans("flarum-tags.forum.choose_tags.submit_button"))))),m("div",{className:"Modal-footer"},m("ul",{className:"TagDiscussionModal-list SelectTagList"},e.filter((function(e){return n||!e.parent()||t.selected.includes(e.parent())})).map((function(e){return m("li",{"data-index":e.id(),className:S()({pinned:null!==e.position(),child:!!e.parent(),colored:!!e.color(),selected:t.selected.includes(e),active:t.selectedTag===e}),style:{color:e.color()},onmouseover:function(){return t.selectedTag=e},onclick:t.toggleTag.bind(t,e)},C(e),m("span",{className:"SelectTagListItem-name"},yt()(e.name(),n)),e.description()?m("span",{className:"SelectTagListItem-description"},e.description()):"")}))),!!o().forum.attribute("canBypassTagCounts")&&m("div",{className:"TagDiscussionModal-controls"},m(It,{className:"Button",onclick:function(){return t.bypassReqs=!t.bypassReqs},isToggled:this.bypassReqs},o().translator.trans("flarum-tags.forum.choose_tags.bypass_requirements"))))]},n.meetsRequirements=function(t,e){return!!this.bypassReqs||t>=this.minPrimary&&e>=this.minSecondary},n.toggleTag=function(t){this.tags&&(this.selected.includes(t)?this.removeTag(t):this.addTag(t),this.filter()&&(this.filter(""),this.selectedTag=this.tags[0]),this.onready())},n.select=function(t){t.metaKey||t.ctrlKey||this.selectedTag&&this.selected.includes(this.selectedTag)?this.selected.length&&this.$('button[type="submit"]').click():this.selectedTag&&this.getItem(this.selectedTag)[0].dispatchEvent(new Event("click"))},n.selectableItems=function(){return this.$(".TagDiscussionModal-list > li")},n.getCurrentNumericIndex=function(){return this.selectedTag?this.selectableItems().index(this.getItem(this.selectedTag)):-1},n.getItem=function(t){return this.selectableItems().filter('[data-index="'+t.id()+'"]')},n.setIndex=function(t,e){var n=this.selectableItems(),r=n.parent();t<0?t=n.length-1:t>=n.length&&(t=0);var a=n.eq(t);if(this.selectedTag=o().store.getById("tags",a.attr("data-index")),m.redraw(),e&&this.selectedTag){var s,i=r.scrollTop(),c=r.offset().top,u=c+r.outerHeight(),l=a.offset().top,d=l+a.outerHeight();l<c?s=i-c+l-parseInt(r.css("padding-top"),10):d>u&&(s=i-u+d+parseInt(r.css("padding-bottom"),10)),void 0!==s&&r.stop(!0).animate({scrollTop:s},100)}},n.onsubmit=function(t){t.preventDefault();var e=this.attrs.discussion,n=this.selected;e&&e.save({relationships:{tags:n}}).then((function(){o().current.matches(gt())&&o().current.get("stream").update(),m.redraw()})),this.attrs.onsubmit&&this.attrs.onsubmit(n),this.hide()},e}(pt());function Ct(){(0,G.extend)(lt(),"moderationControls",(function(t,e){e.canTag()&&t.add("tags",m(dt(),{icon:"fas fa-tag",onclick:function(){return app.modal.show(St,{discussion:e})}},app.translator.trans("flarum-tags.forum.discussion_controls.edit_tags_button")))}))}const kt=flarum.core.compat["forum/components/DiscussionComposer"];var Dt=n.n(kt);function Ot(){(0,G.extend)(l().prototype,"newDiscussionAction",(function(t){var e=this.currentTag();if(e){var n=e.parent(),r=n?[n,e]:[e];t.then((function(t){return t.fields.tags=r}))}else app.composer.fields.tags=[]})),(0,G.extend)(Dt().prototype,"oninit",(function(){app.tagList.load(["parent"]).then((function(){return m.redraw()}))})),Dt().prototype.chooseTags=function(){var t=this;Lt().length&&app.modal.show(St,{selectedTags:(this.composer.fields.tags||[]).slice(0),onsubmit:function(e){t.composer.fields.tags=e,t.$("textarea").focus()}})},(0,G.extend)(Dt().prototype,"headerItems",(function(t){var e=this.composer.fields.tags||[],n=Lt();t.add("tags",m("a",{className:S()(["DiscussionComposer-changeTags",!n.length&&"disabled"]),onclick:this.chooseTags.bind(this)},e.length?M(e):m("span",{className:"TagLabel untagged"},app.translator.trans("flarum-tags.forum.composer_discussion.choose_tags_link"))),10)})),(0,G.override)(Dt().prototype,"onsubmit",(function(t){var e=this,n=this.composer.fields.tags||[],r=n.filter((function(t){return null!==t.position()&&!t.isChild()})),o=n.filter((function(t){return null===t.position()})),a=Lt(),s=parseInt(app.forum.attribute("minPrimaryTags")),i=parseInt(app.forum.attribute("minSecondaryTags")),c=parseInt(app.forum.attribute("maxPrimaryTags")),u=parseInt(app.forum.attribute("maxSecondaryTags"));(!n.length&&0!==c&&0!==u||r.length<s||o.length<i)&&a.length?app.modal.show(St,{selectedTags:n,onsubmit:function(n){e.composer.fields.tags=n,t()}}):t()})),(0,G.extend)(Dt().prototype,"data",(function(t){t.relationships=t.relationships||{},t.relationships.tags=this.composer.fields.tags}))}const Et={"tags/utils/sortTags":E,"tags/models/Tag":g,"tags/helpers/tagsLabel":M,"tags/helpers/tagIcon":C,"tags/helpers/tagLabel":O},At=Object.assign(Et,{"tags/addTagFilter":rt,"tags/addTagControl":Ct,"tags/components/TagHero":et,"tags/components/TagDiscussionModal":St,"tags/components/TagsPage":A,"tags/components/DiscussionTaggedPost":R,"tags/components/TagLinkButton":z,"tags/addTagList":J,"tags/addTagLabels":ct,"tags/addTagComposer":Ot,"tags/utils/getSelectableTags":Lt}),jt=flarum.core;o().initializers.add("flarum-tags",(function(){o().routes.tags={path:"/tags",component:A},o().routes.tag={path:"/t/:tags",component:l()},o().route.tag=function(t){return o().route("tag",{tags:t.slug()})},o().postComponents.discussionTagged=R,o().store.models.tags=g,o().tagList=new F,c().prototype.tags=s().hasMany("tags"),c().prototype.canTag=s().attribute("canTag"),J(),rt(),ct(),Ct(),Ot()})),Object.assign(jt.compat,At)},648:(t,e,n)=>{var r=n(288).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,a=n.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},i=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function m(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),s=new P(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var i=w(s,n);if(i){if(i===f)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=d(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,s),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=m;var f={};function p(){}function h(){}function g(){}var v={};l(v,i,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(I([])));b&&b!==n&&a.call(b,i)&&(v=b);var T=g.prototype=p.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(o,s,i,c){var u=d(t[o],t,s);if("throw"!==u.type){var l=u.arg,m=l.value;return m&&"object"==r(m)&&a.call(m,"__await")?e.resolve(m.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(m).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=d(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function I(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=g,l(T,"constructor",g),l(g,"constructor",h),h.displayName=l(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(T),t},e.awrap=function(t){return{__await:t}},x(_.prototype),l(_.prototype,c,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var s=new _(m(t,n,r,o),a);return e.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},x(T),l(T,u,"Generator"),l(T,i,(function(){return this})),l(T,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=I,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return s.type="throw",s.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},288:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},357:(t,e,n)=>{var r=n(648)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r);var t=n(597),e={};for(const n in t)"default"!==n&&(e[n]=()=>t[n]);n.d(r,e),n(776)})(),module.exports=r})();
//# sourceMappingURL=forum.js.map