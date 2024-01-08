export default function About() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    :root {\n        --blue: #007bff;\n        --indigo: #6610f2;\n        --purple: #6f42c1;\n        --pink: #e83e8c;\n        --red: #dc3545;\n        --orange: #fd7e14;\n        --yellow: #ffc107;\n        --green: #28a745;\n        --teal: #20c997;\n        --cyan: #17a2b8;\n        --white: #fff;\n        --gray: #6c757d;\n        --gray-dark: #343a40;\n        --primary: #007bff;\n        --secondary: #6c757d;\n        --success: #28a745;\n        --info: #17a2b8;\n        --warning: #ffc107;\n        --danger: #dc3545;\n        --light: #f8f9fa;\n        --dark: #343a40;\n        --breakpoint-xs: 0;\n        --breakpoint-sm: 576px;\n        --breakpoint-md: 768px;\n        --breakpoint-lg: 992px;\n        --breakpoint-xl: 1200px;\n        --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n        --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace\n    }\n\n    [type=button]::-moz-focus-inner,\n    button::-moz-focus-inner {\n        padding: 0;\n        border-style: none\n    }\n\n    ::-webkit-file-upload-button {\n        font: inherit;\n        -webkit-appearance: button\n    }\n\n    .h1,\n    h2 {\n        margin-bottom: .5rem;\n        font-weight: 500;\n        line-height: 1.2\n    }\n\n    .h1 {\n        font-size: 2.5rem\n    }\n\n    h2 {\n        font-size: 2rem\n    }\n\n    small {\n        font-size: 80%;\n        font-weight: 400\n    }\n\n    .container {\n        width: 100%;\n        padding-right: 15px;\n        padding-left: 15px;\n        margin-right: auto;\n        margin-left: auto\n    }\n\n    @media (min-width:576px) {\n        .container {\n            max-width: 540px\n        }\n    }\n\n    @media (min-width:768px) {\n        .container {\n            max-width: 720px\n        }\n    }\n\n    @media (min-width:992px) {\n        .container {\n            max-width: 960px\n        }\n    }\n\n    @media (min-width:1200px) {\n        .container {\n            max-width: 1140px\n        }\n    }\n\n    @media (min-width:576px) {\n        .container {\n            max-width: 540px\n        }\n    }\n\n    @media (min-width:768px) {\n        .container {\n            max-width: 720px\n        }\n    }\n\n    @media (min-width:992px) {\n        .container {\n            max-width: 960px\n        }\n    }\n\n    @media (min-width:1200px) {\n        .container {\n            max-width: 1140px\n        }\n    }\n\n    .row {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n        margin-right: -15px;\n        margin-left: -15px\n    }\n\n    .col-12,\n    .col-lg-9,\n    .col-md-11,\n    .col-md-6 {\n        position: relative;\n        width: 100%;\n        padding-right: 15px;\n        padding-left: 15px\n    }\n\n    .col-12 {\n        -ms-flex: 0 0 100%;\n        flex: 0 0 100%;\n        max-width: 100%\n    }\n\n    @media (min-width:768px) {\n        .col-md-6 {\n            -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n            max-width: 50%\n        }\n\n        .col-md-11 {\n            -ms-flex: 0 0 91.666667%;\n            flex: 0 0 91.666667%;\n            max-width: 91.666667%\n        }\n    }\n\n    @media (min-width:992px) {\n        .col-lg-9 {\n            -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n            max-width: 75%\n        }\n    }\n\n    .collapse:not(.show) {\n        display: none\n    }\n\n    .dropdown {\n        position: relative\n    }\n\n    .dropdown-menu {\n        position: absolute;\n        top: 100%;\n        left: 0;\n        z-index: 1000;\n        display: none;\n        float: left;\n        min-width: 10rem;\n        padding: .5rem 0;\n        margin: .125rem 0 0;\n        font-size: 1rem;\n        color: #212529;\n        text-align: left;\n        list-style: none;\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid rgba(0, 0, 0, .15);\n        border-radius: .25rem\n    }\n\n    .dropdown-menu-right {\n        right: 0;\n        left: auto\n    }\n\n    .dropdown-item {\n        display: block;\n        width: 100%;\n        padding: .25rem 1.5rem;\n        clear: both;\n        font-weight: 400;\n        color: #212529;\n        text-align: inherit;\n        white-space: nowrap;\n        background-color: transparent;\n        border: 0\n    }\n\n    .dropdown-item.disabled {\n        color: #6c757d;\n        background-color: transparent\n    }\n\n    .nav-link {\n        display: block;\n        padding: .5rem 1rem\n    }\n\n    .navbar {\n        position: relative;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n        -ms-flex-align: center;\n        align-items: center;\n        -ms-flex-pack: justify;\n        justify-content: space-between;\n        padding: .5rem 1rem\n    }\n\n\n    .navbar-brand {\n        display: inline-block;\n        padding-top: .3125rem;\n        padding-bottom: .3125rem;\n        margin-right: 1rem;\n        font-size: 1.25rem;\n        line-height: inherit;\n        white-space: nowrap\n    }\n\n    .navbar-nav {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        padding-left: 0;\n        margin-bottom: 0;\n        list-style: none\n    }\n\n    .navbar-nav .nav-link {\n        padding-right: 0;\n        padding-left: 0\n    }\n\n    .navbar-nav .dropdown-menu {\n        position: static;\n        float: none\n    }\n\n    .navbar-collapse {\n        -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n        -ms-flex-positive: 1;\n        flex-grow: 1;\n        -ms-flex-align: center;\n        align-items: center\n    }\n\n    .navbar-toggler {\n        padding: .25rem .75rem;\n        font-size: 1.25rem;\n        line-height: 1;\n        background-color: transparent;\n        border: 1px solid transparent;\n        border-radius: .25rem\n    }\n\n    .navbar-toggler-icon {\n        display: inline-block;\n        width: 1.5em;\n        height: 1.5em;\n        vertical-align: middle;\n        content: "";\n        background: no-repeat center center;\n        background-size: 100% 100%\n    }\n\n    @media (max-width:767.98px) {\n        .navbar-expand-md>.container {\n            padding-right: 0;\n            padding-left: 0\n        }\n    }\n\n    @media (min-width:768px) {\n        .navbar-expand-md {\n            -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n            -ms-flex-pack: start;\n            justify-content: flex-start\n        }\n\n        .navbar-expand-md .navbar-nav {\n            -ms-flex-direction: row;\n            flex-direction: row\n        }\n\n        .navbar-expand-md .navbar-nav .dropdown-menu {\n            position: absolute\n        }\n\n        .navbar-expand-md .navbar-nav .nav-link {\n            padding-right: .5rem;\n            padding-left: .5rem\n        }\n\n        .navbar-expand-md>.container {\n            -ms-flex-wrap: nowrap;\n            flex-wrap: nowrap\n        }\n\n        .navbar-expand-md .navbar-collapse {\n            display: -ms-flexbox !important;\n            display: flex !important;\n            -ms-flex-preferred-size: auto;\n            flex-basis: auto\n        }\n\n        .navbar-expand-md .navbar-toggler {\n            display: none\n        }\n    }\n\n    .navbar-light .navbar-brand {\n        color: rgba(0, 0, 0, .9)\n    }\n\n    .navbar-light .navbar-nav .nav-link {\n        color: rgba(0, 0, 0, .5)\n    }\n\n    .navbar-light .navbar-toggler {\n        color: rgba(0, 0, 0, .5);\n        border-color: rgba(0, 0, 0, .1)\n    }\n\n    .navbar-light .navbar-toggler-icon {\n        background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'30\' height=\'30\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba(0, 0, 0, 0.5)\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")\n    }\n\n    .bg-white {\n        background-color: #fff !important\n    }\n\n    .border-bottom {\n        border-bottom: 1px solid #dee2e6 !important\n    }\n\n    .d-flex {\n        display: -ms-flexbox !important;\n        display: flex !important\n    }\n\n    @media (min-width:768px) {\n        .d-md-inline-flex {\n            display: -ms-inline-flexbox !important;\n            display: inline-flex !important\n        }\n    }\n\n    .flex-grow-1 {\n        -ms-flex-positive: 1 !important;\n        flex-grow: 1 !important\n    }\n\n    .justify-content-start {\n        -ms-flex-pack: start !important;\n        justify-content: flex-start !important\n    }\n\n    .align-items-center {\n        -ms-flex-align: center !important;\n        align-items: center !important\n    }\n\n    @media (min-width:768px) {\n        .justify-content-md-end {\n            -ms-flex-pack: end !important;\n            justify-content: flex-end !important\n        }\n    }\n\n    .ml-2 {\n        margin-left: .5rem !important\n    }\n\n    .mb-3 {\n        margin-bottom: 1rem !important\n    }\n\n    .p-0 {\n        padding: 0 !important\n    }\n\n    .py-3 {\n        padding-top: 1rem !important\n    }\n\n    .py-3 {\n        padding-bottom: 1rem !important\n    }\n\n    .py-5 {\n        padding-top: 3rem !important\n    }\n\n    .py-5 {\n        padding-bottom: 3rem !important\n    }\n\n    .mx-auto {\n        margin-right: auto !important\n    }\n\n    .mx-auto {\n        margin-left: auto !important\n    }\n\n    @media (min-width:768px) {\n\n        .pt-md-4,\n        .py-md-4 {\n            padding-top: 1.5rem !important\n        }\n\n        .py-md-4 {\n            padding-bottom: 1.5rem !important\n        }\n    }\n\n    .text-center {\n        text-align: center !important\n    }\n\n    @media (min-width:768px) {\n        .text-md-left {\n            text-align: left !important\n        }\n    }\n\n    .font-weight-bold {\n        font-weight: 700 !important\n    }\n\n    .text-dark {\n        color: #343a40 !important\n    }\n\n    #header {\n        z-index: 1030;\n        position: relative\n    }\n\n    .navbar-light .navbar-nav {\n        color: rgba(0, 0, 0, .5)\n    }\n\n    .navbar-light .navbar-nav .nav-link {\n        color: #000\n    }\n\n    #footer {\n        background: #fff;\n        font-size: 12px;\n        color: rgba(var(--dark-color), .5)\n    }\n\n    #footer .border-bottom {\n        border-color: var(--dark-color-50) !important\n    }\n\n    :root {\n        --body-color: #F2F6F8;\n        --primary-color: 0, 174, 239;\n        --primary-color-defult: #00AEEF;\n        --secondary-color: 248, 145, 0;\n        --success-color: #24B502;\n        --secondary-badge-color: #FF9124;\n        --dark-gray: #959B94;\n        --dimgray-color: #707070;\n        --danger-color: #F50000;\n        --solidgray-color: #898989;\n        --silver-color: #B7B7B7;\n        --bg-light: #CBCBCB;\n        --primary-hover-color: #0096ce;\n        --dark-color: 0, 0, 0;\n        --black-color: #000000;\n        --dark-color-50: rgba(var(--dark-color), 0.5);\n        --font-family: \'Open Sans\', sans-serif;\n        --font-family-rubik: \'Rubik\', sans-serif;\n        --normal-font-size: 16px;\n        --normal-box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.16);\n        --button-height: 41px;\n        --input-height: 41px\n    }\n\n    html {\n        min-height: 100%\n    }\n\n    body {\n        font-family: var(--font-family-rubik);\n        background: var(--body-color);\n        font-size: var(--normal-font-size)\n    }\n\n    a {\n        color: rgb(var(--primary-color));\n        text-decoration: none;\n        background-color: transparent\n    }\n\n    .h-list * {\n        line-height: inherit;\n        margin-right: var(--item-gap);\n        list-style-type: none\n    }\n\n    .h-list :last-child {\n        margin-right: 0 !important\n    }\n\n    #main {\n        min-height: calc(100vh - 152px)\n    }\n\n    .dropdown .dropdown-menu a {\n        border-bottom: 1px solid rgba(var(--dark-color), .15);\n        padding: .35rem .8rem\n    }\n\n    .dropdown .dropdown-menu a:last-child {\n        border: 0\n    }\n\n    @media only screen and (max-width:767px) {\n        body {\n            font-size: 16px\n        }\n\n        .h1 {\n            font-size: 1.9rem\n        }\n    }\n\n    #overlay {\n        background: #fff;\n        color: #000;\n        position: fixed;\n        height: 100%;\n        width: 100%;\n        z-index: 5000;\n        top: 0;\n        left: 0;\n        text-align: center;\n        opacity: .8\n    }\n\n    .overlay-loader-inner {\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n    }\n\n    .spinner {\n        margin: 0 auto;\n        height: 64px;\n        width: 64px;\n        animation: rotate .8s infinite linear;\n        border: 5px solid rgb(var(--primary-color));\n        border-right-color: transparent;\n        border-radius: 50%\n    }\n\n    @keyframes rotate {\n        0% {\n            transform: rotate(0)\n        }\n\n        100% {\n            transform: rotate(360deg)\n        }\n    }\n\n    .custom-list li {\n        margin-bottom: 10px;\n    }\n        ul.lst-kix_list_1-0 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_3-0>li:before {\n            content: "\\0025cf  "\n        }\n\n        ul.lst-kix_list_5-7 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_9-3 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_5-8 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_9-4 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_3-1>li:before {\n            content: "o  "\n        }\n\n        .lst-kix_list_3-2>li:before {\n            content: "\\0025aa  "\n        }\n\n        ul.lst-kix_list_5-5 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_9-1 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_5-6 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_9-2 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_8-1>li:before {\n            content: "o  "\n        }\n\n        ul.lst-kix_list_9-7 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_9-8 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_8-2>li:before {\n            content: "\\0025aa  "\n        }\n\n        ul.lst-kix_list_9-5 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_9-6 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_1-3 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_3-5>li:before {\n            content: "\\0025aa  "\n        }\n\n        ul.lst-kix_list_5-0 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_1-4 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_1-1 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_3-4>li:before {\n            content: "\\0025aa  "\n        }\n\n        ul.lst-kix_list_1-2 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_5-3 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_1-7 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_3-3>li:before {\n            content: "\\0025aa  "\n        }\n\n        ul.lst-kix_list_5-4 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_9-0 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_1-8 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_5-1 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_8-0>li:before {\n            content: "\\0025cf  "\n        }\n\n        ul.lst-kix_list_1-5 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_5-2 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_1-6 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_8-7>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_3-8>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_8-5>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_8-6>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_8-3>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_3-6>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_3-7>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_8-4>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_8-8>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_5-0>li:before {\n            content: "\\0025cf  "\n        }\n\n        .lst-kix_list_4-8>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_5-3>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_4-7>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_5-2>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_5-1>li:before {\n            content: "o  "\n        }\n\n        ul.lst-kix_list_4-8 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_5-7>li:before {\n            content: "\\0025aa  "\n        }\n\n        ul.lst-kix_list_8-4 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_8-5 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_4-6 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_5-6>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_5-8>li:before {\n            content: "\\0025aa  "\n        }\n\n        ul.lst-kix_list_8-2 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_4-7 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_8-3 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_8-8 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_8-6 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_8-7 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_4-0 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_4-1 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_5-4>li:before {\n            content: "\\0025aa  "\n        }\n\n        ul.lst-kix_list_4-4 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_5-5>li:before {\n            content: "\\0025aa  "\n        }\n\n        ul.lst-kix_list_8-0 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_4-5 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_8-1 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_4-2 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_4-3 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_6-1>li:before {\n            content: "o  "\n        }\n\n        .lst-kix_list_6-3>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_6-0>li:before {\n            content: "\\0025cf  "\n        }\n\n        .lst-kix_list_6-4>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_6-2>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_6-8>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_6-5>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_6-7>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_7-0>li:before {\n            content: "\\0025cf  "\n        }\n\n        .lst-kix_list_6-6>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_2-6>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_2-7>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_7-4>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_7-6>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_2-4>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_2-5>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_2-8>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_7-1>li:before {\n            content: "o  "\n        }\n\n        .lst-kix_list_7-5>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_7-2>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_7-3>li:before {\n            content: "\\0025aa  "\n        }\n\n        ul.lst-kix_list_7-5 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_7-6 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_7-3 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_3-7 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_7-4 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_3-8 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_7-7 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_7-8 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_3-1 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_3-2 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_7-8>li:before {\n            content: "\\0025aa  "\n        }\n\n        ul.lst-kix_list_3-0 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_7-1 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_3-5 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_7-2 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_3-6 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_3-3 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_7-0 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_7-7>li:before {\n            content: "\\0025aa  "\n        }\n\n        ul.lst-kix_list_3-4 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_4-0>li:before {\n            content: "\\0025cf  "\n        }\n\n        .lst-kix_list_4-1>li:before {\n            content: "o  "\n        }\n\n        .lst-kix_list_4-4>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_9-2>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_4-3>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_4-5>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_4-2>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_4-6>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_9-3>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_9-0>li:before {\n            content: "\\0025cf  "\n        }\n\n        .lst-kix_list_9-1>li:before {\n            content: "o  "\n        }\n\n        .lst-kix_list_9-7>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_9-6>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_9-4>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_9-5>li:before {\n            content: "\\0025aa  "\n        }\n\n        ul.lst-kix_list_6-6 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_6-7 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_6-4 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_2-8 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_6-5 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_6-8 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_2-2 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_1-0>li:before {\n            content: "\\0025cf  "\n        }\n\n        ul.lst-kix_list_2-3 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_2-0 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_2-1 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_6-2 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_9-8>li:before {\n            content: "\\0025aa  "\n        }\n\n        ul.lst-kix_list_2-6 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_6-3 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_1-1>li:before {\n            content: "o  "\n        }\n\n        .lst-kix_list_1-2>li:before {\n            content: "\\0025aa  "\n        }\n\n        ul.lst-kix_list_2-7 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_6-0 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_2-4 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_6-1 {\n            list-style-type: none\n        }\n\n        ul.lst-kix_list_2-5 {\n            list-style-type: none\n        }\n\n        .lst-kix_list_1-3>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_1-4>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_1-7>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_1-5>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_1-6>li:before {\n            content: "\\0025aa  "\n        }\n\n        li.li-bullet-0:before {\n            margin-left: -18pt;\n            white-space: nowrap;\n            display: inline-block;\n            min-width: 18pt\n        }\n\n        .lst-kix_list_2-0>li:before {\n            content: "\\0025cf  "\n        }\n\n        .lst-kix_list_2-1>li:before {\n            content: "o  "\n        }\n\n        .lst-kix_list_1-8>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_2-2>li:before {\n            content: "\\0025aa  "\n        }\n\n        .lst-kix_list_2-3>li:before {\n            content: "\\0025aa  "\n        }\n\n        ol {\n            margin: 0;\n            padding: 0\n        }\n\n        table td,\n        table th {\n            padding: 0\n        }\n\n        .c2 {\n            margin-left: 36pt;\n            padding-top: 14pt;\n            padding-left: 0pt;\n            padding-bottom: 14pt;\n            line-height: 1.0791666666666666;\n            orphans: 2;\n            widows: 2;\n            text-align: left\n        }\n\n        .c1 {\n            margin-left: 36pt;\n            padding-top: 0pt;\n            padding-left: 0pt;\n            padding-bottom: 0pt;\n            line-height: 1.0791666666666666;\n            orphans: 2;\n            widows: 2;\n            text-align: left\n        }\n\n        .c12 {\n            margin-left: 36pt;\n            padding-top: 0pt;\n            padding-left: 0pt;\n            padding-bottom: 14pt;\n            line-height: 1.0791666666666666;\n            orphans: 2;\n            widows: 2;\n            text-align: left\n        }\n\n        .c9 {\n            margin-left: 36pt;\n            padding-top: 14pt;\n            padding-left: 0pt;\n            padding-bottom: 0pt;\n            line-height: 1.0791666666666666;\n            orphans: 2;\n            widows: 2;\n            text-align: left\n        }\n\n        .c13 {\n            padding-top: 0pt;\n            padding-bottom: 14pt;\n            line-height: 1.0;\n            orphans: 2;\n            widows: 2;\n            text-align: center\n        }\n\n        .c3 {\n            padding-top: 3pt;\n            padding-bottom: 3pt;\n            line-height: 1.0;\n            orphans: 2;\n            widows: 2;\n            text-align: left\n        }\n\n        .c15 {\n            -webkit-text-decoration-skip: none;\n            color: #0563c1;\n            font-weight: 400;\n            text-decoration: underline;\n            text-decoration-skip-ink: none;\n            font-size: 12pt;\n        }\n\n        .c0 {\n            color: #000000;\n            font-weight: 400;\n            text-decoration: none;\n            vertical-align: baseline;\n            font-size: 12pt;\n\n        }\n\n        .c4 {\n            color: #000000;\n            font-weight: 400;\n            text-decoration: none;\n            vertical-align: baseline;\n            font-size: 11pt;\n\n        }\n\n        .c7 {\n            padding-top: 0pt;\n            padding-bottom: 8pt;\n            line-height: 1.0791666666666666;\n            orphans: 2;\n            widows: 2;\n            text-align: left;\n            height: 11pt\n        }\n\n        .c5 {\n            color: #000000;\n            font-weight: 700;\n            text-decoration: none;\n            vertical-align: baseline;\n            font-size: 13.5pt;\n        }\n\n        .c14 {\n            -webkit-text-decoration-skip: none;\n            text-decoration: underline;\n            vertical-align: baseline;\n            text-decoration-skip-ink: none;\n            font-style: normal\n        }\n\n        .c10 {\n            font-size: 12pt;\n            color: #000000;\n            font-weight: 700\n        }\n\n        .c11 {\n            font-size: 12pt;\n            color: #000000;\n            font-weight: 400\n        }\n\n        .c8 {\n            max-width: 468pt;\n            padding: 72pt 72pt 72pt 72pt\n        }\n\n        .c6 {\n            padding: 0;\n            margin: 0\n        }\n\n        .c16 {\n            color: inherit;\n            text-decoration: inherit\n        }\n\n        .title {\n            padding-top: 24pt;\n            color: #000000;\n            font-weight: 700;\n            font-size: 36pt;\n            padding-bottom: 6pt;\n            line-height: 1.0791666666666666;\n            page-break-after: avoid;\n            orphans: 2;\n            widows: 2;\n            text-align: left\n        }\n\n        .subtitle {\n            padding-top: 18pt;\n            color: #666666;\n            font-size: 24pt;\n            padding-bottom: 4pt;\n            line-height: 1.0791666666666666;\n            page-break-after: avoid;\n            font-style: italic;\n            orphans: 2;\n            widows: 2;\n            text-align: left\n        }\n',
        }}
      />
      <main id="main" role="main" className="simple_inner_page">
        <section className="text-dark py-5 l-h-2">
          <div className="container">
            <div className="row text-center mb-3 pt-md-4">
              <div className="col-12 col-md-11 col-lg-9 mx-auto">
                <h1 className="font-weight-bold mb-3 h1">
                  MOBIMATTER LTD Privacy Policy
                </h1>
                <p>
                  This privacy policy will explain how our organization uses the
                  personal data we collect from you when you use mobimatter.com
                  website or Mobimatter mobile app.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h3 className="h5">Topics:</h3>
                <ul className="list-unstyled custom-list">
                  <li className="c1 li-bullet-0">
                    <span className="c0"> What data do we collect?</span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">How do we collect your data?</span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">How will we use your data?</span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">How do we store your data?</span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">Marketing</span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">
                      What are your data protection rights?
                    </span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">What are cookies?</span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">How do we use cookies?</span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">What types of cookies do we use?</span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">How to manage your cookies</span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">
                      Privacy policies of other websites
                    </span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">Changes to our privacy policy</span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">How to contact us</span>
                  </li>
                </ul>
                <p className="c3">
                  <span className="c5">What data do we collect?</span>
                </p>
                <p className="c3">
                  <span className="c0">
                    Mobimatter LTD collects the following data:
                  </span>
                </p>
                <ul className="c6 lst-kix_list_2-0 start">
                  <li className="c9 li-bullet-0">
                    <span className="c0">
                      Personal identification information (Name, email address)
                    </span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">
                      Your public social media profile avatar if you create
                      account with using either Google or Facebook options
                    </span>
                  </li>
                  <li className="c12 li-bullet-0">
                    <span className="c0">IP Address</span>
                  </li>
                </ul>
                <p className="c3">
                  <span className="c5">How do we collect your data?</span>
                </p>
                <p className="c3">
                  <span className="c0">
                    You directly provide us with most of the data we collect. We
                    collect data and process data when you:
                  </span>
                </p>
                <ul className="c6 lst-kix_list_3-0 start">
                  <li className="c9 li-bullet-0">
                    <span className="c0">
                      Register online or place an order for any of our products
                      or services.
                    </span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">
                      Voluntarily complete a customer survey or provide feedback
                      on any of our message boards or via email.
                    </span>
                  </li>
                  <li className="c12 li-bullet-0">
                    <span className="c0">
                      Use or view our website via your browser’s cookies.
                    </span>
                  </li>
                </ul>
                <p className="c3">
                  <span className="c0">
                    Mobimatter may also receive your data indirectly from the
                    following sources:
                  </span>
                </p>
                <ul className="c6 lst-kix_list_4-0 start">
                  <li className="c2 li-bullet-0">
                    <span className="c0">
                      Google Firebase, Facebook (if you create account with one
                      of these methods)
                    </span>
                  </li>
                </ul>
                <p className="c3">
                  <span className="c5">How will we use your data?</span>
                </p>
                <p className="c3">
                  <span className="c0">
                    Mobimatter collects your data so that we can:
                  </span>
                </p>
                <ul className="c6 lst-kix_list_5-0 start">
                  <li className="c9 li-bullet-0">
                    <span className="c0">
                      Process your order and manage your account.
                    </span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">
                      Provide you with customer support if you need it
                    </span>
                  </li>
                  <li className="c12 li-bullet-0">
                    <span className="c0">
                      Email you with special offers on other products and
                      services we think you might like.
                    </span>
                  </li>
                  <li className="c12 li-bullet-0">
                    <span className="c0">
                      In order to get feedback and provide support, MobiMatter
                      will share your name and email with Trustpilot and Zendesk
                      Inc. after your purchase
                    </span>
                  </li>
                </ul>
                <p className="c3">
                  <span className="c0">
                    If you agree, Mobimatter will share your data with our
                    partner companies so that they may offer you their products
                    and services.
                  </span>
                </p>
                <ul className="c6 lst-kix_list_6-0 start">
                  <li className="c2 li-bullet-0">
                    <span className="c0">
                      Google, Microsoft, Facebook – Please refer to Cookies
                      section below
                    </span>
                  </li>
                </ul>
                <p className="c3">
                  <span className="c0">
                    When Mobimatter processes your order, it may send your data
                    to, and also use the resulting information from, credit
                    reference agencies to prevent fraudulent purchases.
                  </span>
                </p>
                <p className="c3">
                  <span className="c5">How do we store your data?</span>
                </p>
                <p className="c3">
                  <span className="c0">
                    Mobimatter securely stores your data at servers belonging to
                    large cloud computing providers, located in Netherlands and
                    Germany. Your data is encrypted at rest and in transit.
                  </span>
                </p>
                <p className="c3">
                  <span className="c0">
                    Mobimatter will store your account, profile, order history,
                    and similar data it has obtained from you until you choose
                    to delete it anytime.
                  </span>
                </p>
                <p className="c3">
                  <span className="c0">
                    Data related to order / purchase of the telecommunications
                    service will be stored for a period of not less than 5 years
                    in order to comply with any lawful inquiry that may come
                    from competent authorities.
                  </span>
                </p>
                <p className="c3">
                  <span className="c5">Marketing</span>
                </p>
                <p className="c3">
                  <span className="c0">
                    Mobimatter would like to send you information about products
                    and services of ours that we think you might like. If you
                    have agreed to receive marketing, you may always opt out at
                    a later date.
                  </span>
                </p>
                <p className="c3">
                  <span className="c11">
                    You have the right at any time to stop Mobimatter from
                    contacting you for marketing purposes. If you no longer wish
                    to be contacted for marketing purposes, please send email to
                  </span>
                  <span className="c15">
                    <a className="c16" href="mailto:support@mobimatter.com">
                      support@mobimatter.com
                    </a>
                  </span>
                  <span className="c0">
                    &nbsp;with your request, which will be actioned upon within
                    a period of 5 Working days.
                  </span>
                </p>
                <p className="c3">
                  <span className="c5">
                    What are your data protection rights?
                  </span>
                </p>
                <p className="c3">
                  <span className="c0">
                    Mobimatter would like to make sure you are fully aware of
                    all of your data protection rights. Every user is entitled
                    to the following:
                  </span>
                </p>
                <p className="c3">
                  <span className="c10">The right to access</span>
                  <span className="c0">
                    &nbsp;– You have the right to request Mobimatter for copies
                    of your personal data. We may charge you a small fee for
                    this service.
                  </span>
                </p>
                <p className="c3">
                  <span className="c10">The right to rectification</span>
                  <span className="c0">
                    &nbsp;– You have the right to request that Mobimatter
                    correct any information you believe is inaccurate. You also
                    have the right to request Mobimatter to complete the
                    information you believe is incomplete.
                  </span>
                </p>
                <p className="c3">
                  <span className="c10">The right to erasure</span>
                  <span className="c0">
                    &nbsp;– You have the right to request that Mobimatter erase
                    your personal data, under certain conditions.
                  </span>
                </p>
                <p className="c3">
                  <span className="c10">The right to restrict processing</span>
                  <span className="c0">
                    &nbsp;– You have the right to request that Mobimatter
                    restrict the processing of your personal data, under certain
                    conditions.
                  </span>
                </p>
                <p className="c3">
                  <span className="c10">The right to object to processing</span>
                  <span className="c0">
                    &nbsp;– You have the right to object to Mobimatter’s
                    processing of your personal data, under certain conditions.
                  </span>
                </p>
                <p className="c3">
                  <span className="c10">The right to data portability</span>
                  <span className="c0">
                    &nbsp;– You have the right to request that Mobimatter
                    transfer the data that we have collected to another
                    organization, or directly to you, under certain conditions.
                  </span>
                </p>
                <p className="c3">
                  <span className="c0">
                    If you make a request, we have one month to respond to you.
                    If you would like to exercise any of these rights, please
                    contact us at our email: support@mobimatter.com
                  </span>
                </p>
                <p className="c3">
                  <span className="c5">Cookies</span>
                </p>
                <p className="c3">
                  <span className="c0">
                    Cookies are text files placed on your computer to collect
                    standard Internet log information and visitor behavior
                    information. When you visit our websites, we may collect
                    information from you automatically through cookies or
                    similar technology
                  </span>
                </p>
                <p className="c3">
                  <span className="c0">
                    For further information, visit{" "}
                    <a href="https://allaboutcookies.org">
                      allaboutcookies.org
                    </a>
                    .
                  </span>
                </p>
                <p className="c3">
                  <span className="c5">How do we use cookies?</span>
                </p>
                <p className="c3">
                  <span className="c0">
                    Mobimatter uses cookies in a range of ways to improve your
                    experience on our website, including:
                  </span>
                </p>
                <ul className="c6 lst-kix_list_8-0 start">
                  <li className="c9 li-bullet-0">
                    <span className="c0">Keeping you signed in</span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">
                      Understanding how you use our website
                    </span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">
                      Improving our efficiency in providing customer support
                    </span>
                  </li>
                  <li className="c12 li-bullet-0">
                    <span className="c0">
                      Improving the performance of our products and services
                    </span>
                  </li>
                </ul>
                <p className="c3">
                  <span className="c5">What types of cookies do we use?</span>
                </p>
                <p className="c3">
                  <span className="c0">
                    There are a number of different types of cookies, however,
                    our website uses:
                  </span>
                </p>
                <ul className="c6 lst-kix_list_9-0 start">
                  <li className="c9 li-bullet-0">
                    <span className="c0">
                      Functionality – Mobimatter uses these cookies so that we
                      recognize you on our website and remember your previously
                      selected preferences. These could include what language
                      you prefer and location you are in. A mix of first-party
                      and third-party cookies are used.
                    </span>
                  </li>
                  <li className="c1 li-bullet-0">
                    <span className="c0">
                      Targeting / Advertising – Mobimatter uses these cookies to
                      collect information about your visit to our website, the
                      content you viewed, the links you followed and information
                      about your browser, device, and your IP address.
                      Mobimatter sometimes shares some limited aspects of this
                      data with third parties for advertising purposes. We may
                      also share online data collected through cookies with our
                      advertising partners. This means that when you visit
                      another website, you may be shown advertising based on
                      your browsing patterns on our website.
                    </span>
                  </li>
                  <li className="c12 li-bullet-0">
                    <span className="c0">
                      Analytics – Mobimatter uses these cookies to improve its
                      products and services and provide you with better user
                      experience.{" "}
                    </span>
                  </li>
                </ul>
                <p className="c3">
                  <span className="c5">How to manage cookies</span>
                </p>
                <p className="c3">
                  <span className="c0">
                    You can set your browser not to accept cookies, and the
                    above website tells you how to remove cookies from your
                    browser. However, in a few cases, some of our website
                    features may not function as a result.{" "}
                  </span>
                </p>
                <p className="c3">
                  <span className="c11">
                    You can opt-out of advertising and analytics cookies when
                    you first visit our website, or later on by deleting all
                    cookies for mobimatter.com, then clicking on &quot;manage
                    preferences&qout; on the cookie prompt.
                  </span>
                </p>
                <p className="c3">
                  <span className="c5">Privacy policies of other websites</span>
                </p>
                <p className="c3">
                  <span className="c0">
                    The mobimatter.com website contains links to other websites.
                    Our privacy policy applies only to our website, so if you
                    click on a link to another website, you should read their
                    privacy policy.
                  </span>
                </p>
                <p className="c3">
                  <span className="c5">Changes to our privacy policy</span>
                </p>
                <p className="c3">
                  <span className="c0">
                    Mobimatter keeps its privacy policy under regular review and
                    places any updates on this web page. This privacy policy was
                    last updated on 21 December 2023.
                  </span>
                </p>
                <p className="c3">
                  <span className="c5">How to contact us</span>
                </p>
                <p className="c3">
                  <span className="c0">
                    If you have any questions about Our Company’s privacy
                    policy, the data we hold on you, or you would like to
                    exercise one of your data protection rights, please do not
                    hesitate to contact us by email at info@mobimatter.com.
                  </span>
                </p>
                <p className="c7">
                  <span className="c4" />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
