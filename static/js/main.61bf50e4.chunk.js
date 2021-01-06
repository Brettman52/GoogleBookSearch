(this["webpackJsonpbook-search"]=this["webpackJsonpbook-search"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(1),a=o(8),i=o.n(a),s=o(2),c=o(3),l=o(5),h=o(4),b=(o(14),o(15),function(e){Object(l.a)(o,e);var t=Object(h.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"filterContainer",children:[Object(n.jsx)("label",{htmlFor:"print type",children:"Print Type:"}),Object(n.jsxs)("select",{placeholder:"all",name:"print type",onChange:function(t){return e.props.handlePrintTypeFilter(t.target.value)},children:[Object(n.jsx)("option",{value:"ALL",children:"All"}),Object(n.jsx)("option",{value:"MAGAZINE",children:"Magazine"}),Object(n.jsx)("option",{value:"BOOK",children:"Book"})]}),Object(n.jsx)("label",{htmlFor:"book type",children:"Book Type:"}),Object(n.jsxs)("select",{id:"bookTypeFilter",onChange:function(t){return e.props.handleBookTypeFilter(t.target.value)},name:"book type",children:[Object(n.jsx)("option",{value:"ALL",children:"All"}),Object(n.jsx)("option",{value:"PARTIAL",children:"Partial"}),Object(n.jsx)("option",{value:"ALL_PAGES",children:"Full"}),Object(n.jsx)("option",{value:"FREE_EBOOK",children:"Free-ebook"})]})]})}}]),o}(r.Component)),u=(o(16),function(e){Object(l.a)(o,e);var t=Object(h.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"searchBar",children:Object(n.jsxs)("form",{className:"search-form",onSubmit:function(t){return e.props.handleSubmit(t)},children:[Object(n.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(n.jsx)("input",{type:"text",name:"search",id:"search",placeholder:"Start here",onChange:function(t){return e.props.handleSearch(t.target.value)}}),Object(n.jsx)("button",{type:"submit",name:"search",children:"Go"})]})})}}]),o}(r.Component)),p=o(7),j=(o(17),o(18),o.p+"static/media/noImageVector.cf4a2957.jpg");function d(e){var t,o,r,a,i=e.volumeInfo,s=i.infoLink,c=i.title,l=i.authors,h=function(e){var t=e.split(" ");return t.length>20?t.slice(0,20).join(" ")+"...":t.join(" ")}((null==(t=e.volumeInfo.description)&&(t="No description available."),t)),b="NOT_FOR_SALE"===(o=e.saleInfo).saleability?"Not for sale":"FREE"===o.saleability?"Free":"$"+o.listPrice.amount.toFixed(2),u=e.volumeInfo.hasOwnProperty("imageLinks")?Object(n.jsx)("img",{src:e.volumeInfo.imageLinks.thumbnail,alt:"bookcover",width:"175px",height:"250px"}):Object(n.jsx)("img",{src:j,alt:"No thumbnail available",width:"200px",height:"225px"}),p=(a=l,a=!1===e.volumeInfo.hasOwnProperty("authors")?"No author info available":r=(r=a).length>0?r.join(", "):r[0]);return Object(n.jsxs)("div",{className:"book",children:[Object(n.jsx)("div",{className:"bookImage",children:Object(n.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:u})}),Object(n.jsxs)("div",{className:"bookRow",children:[Object(n.jsx)("div",{className:"bookTitle",children:c}),Object(n.jsxs)("div",{className:"bookAuthor",children:["Author(s): ",p]}),Object(n.jsxs)("div",{className:"bookPrice",children:["Price: ",b]}),Object(n.jsx)("div",{className:"bookDescription",children:h})]})]})}var f=function(e){Object(l.a)(o,e);var t=Object(h.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"displayByBookType",value:function(){var e=this,t=this.props.bookData.filter((function(t){return("ALL"===e.props.bookType||t.saleInfo.saleability===e.props.saleability&&t.saleInfo.isEbook===e.props.isEbook||t.accessInfo.viewability===e.props.bookType)&&("ALL"===e.props.printType||t.volumeInfo.printType===e.props.printType)})).map((function(e,t){return Object(r.createElement)(d,Object(p.a)(Object(p.a)({},e),{},{key:t}))}));return 0===t.length?Object(n.jsxs)("div",{id:"emptyMessage",children:["Nothing to see here...",Object(n.jsx)("br",{}),"Try readjusting your filters"]}):t}},{key:"render",value:function(){var e=this.displayByBookType();return Object(n.jsx)("div",{children:e})}}]),o}(r.Component);f.defaultProps={books:[]};var O=function(e){Object(l.a)(o,e);var t=Object(h.a)(o);function o(e){var n;return Object(s.a)(this,o),(n=t.call(this,e)).handleBookTypeFilter=function(e){"FREE_EBOOK"===e?n.setState({bookType:e,isEbook:!0,saleability:"FREE"}):n.setState({bookType:e,isEbook:"",saleability:""})},n.handleSearch=function(e){n.setState({search:e})},n.handlePrintTypeFilter=function(e){n.setState({printType:e})},n.state={search:"",books:[],printType:"ALL",bookType:"ALL",hasSubmitted:!1,isEbook:"",saleability:"",failedSearchHold:""},n}return Object(c.a)(o,[{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),""===this.state.search)alert("Enter a search to continue.");else{var o=function(e){return Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")}({q:this.state.search,maxResults:10,key:"AIzaSyCzLBVLpCtQHMf4ql8ySnqWVv9bzLo6KNE"}),n=encodeURI("https://www.googleapis.com/books/v1/volumes?"+o);console.log(n);fetch(n,{method:"GET"}).then((function(e){if(!e.ok)throw new Error("Something went wrong, please try again later.");return e})).then((function(e){return e.json()})).then((function(e){t.setState({books:e.items,error:null,hasSubmitted:!0,failedSearchHold:t.state.search})})).catch((function(e){t.setState({error:e.message})}))}}},{key:"render",value:function(){var e=this,t=this.state.hasSubmitted?void 0===this.state.books?Object(n.jsxs)("div",{className:"searchEmpty",children:['No results for "',this.state.failedSearchHold,'"']}):Object(n.jsx)(f,{bookData:this.state.books,bookType:this.state.bookType,printType:this.state.printType,isEbook:this.state.isEbook,saleability:this.state.saleability}):Object(n.jsx)("div",{className:"defaultMessage",children:"Search for your favorite books to begin"}),o=this.state.error?Object(n.jsx)("div",{className:"renderBookError",children:this.state.error}):" ";return Object(n.jsxs)("div",{children:[Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("h1",{children:"Google Book Search"})}),Object(n.jsx)(u,{handleSearch:this.handleSearch,handleSubmit:function(t){return e.handleSubmit(t)}}),Object(n.jsx)(b,{handlePrintTypeFilter:this.handlePrintTypeFilter,handleBookTypeFilter:this.handleBookTypeFilter}),Object(n.jsxs)("section",{children:[t,o]})]})}}]),o}(r.Component);i.a.render(Object(n.jsx)(O,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.61bf50e4.chunk.js.map