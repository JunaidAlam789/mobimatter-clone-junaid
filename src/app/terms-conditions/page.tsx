export default function About() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    :root {\n        --blue: #007bff;\n        --indigo: #6610f2;\n        --purple: #6f42c1;\n        --pink: #e83e8c;\n        --red: #dc3545;\n        --orange: #fd7e14;\n        --yellow: #ffc107;\n        --green: #28a745;\n        --teal: #20c997;\n        --cyan: #17a2b8;\n        --white: #fff;\n        --gray: #6c757d;\n        --gray-dark: #343a40;\n        --primary: #007bff;\n        --secondary: #6c757d;\n        --success: #28a745;\n        --info: #17a2b8;\n        --warning: #ffc107;\n        --danger: #dc3545;\n        --light: #f8f9fa;\n        --dark: #343a40;\n        --breakpoint-xs: 0;\n        --breakpoint-sm: 576px;\n        --breakpoint-md: 768px;\n        --breakpoint-lg: 992px;\n        --breakpoint-xl: 1200px;\n        --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";\n        --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace\n    }\n\n    *, ::after, ::before {\n        box-sizing: border-box\n    }\n\n    html {\n        font-family: sans-serif;\n        line-height: 1.15;\n        -webkit-text-size-adjust: 100%\n    }\n\n    header, main, nav, section {\n        display: block\n    }\n\n    body {\n        margin: 0;\n        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";\n        font-size: 1rem;\n        font-weight: 400;\n        line-height: 1.5;\n        color: #212529;\n        text-align: left;\n        background-color: #fff\n    }\n\n    h2 {\n        margin-top: 0;\n        margin-bottom: .5rem\n    }\n\n    p {\n        margin-top: 0;\n        margin-bottom: 1rem\n    }\n\n    ul {\n        margin-top: 0;\n        margin-bottom: 1rem\n    }\n\n    strong {\n        font-weight: bolder\n    }\n\n    small {\n        font-size: 80%\n    }\n\n    a {\n        color: #007bff;\n        text-decoration: none;\n        background-color: transparent\n    }\n\n    svg {\n        overflow: hidden;\n        vertical-align: middle\n    }\n\n    button {\n        border-radius: 0\n    }\n\n    button {\n        margin: 0;\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit\n    }\n\n    button {\n        overflow: visible\n    }\n\n    button {\n        text-transform: none\n    }\n\n    [type=button], button {\n        -webkit-appearance: button\n    }\n\n        [type=button]::-moz-focus-inner, button::-moz-focus-inner {\n            padding: 0;\n            border-style: none\n        }\n\n    ::-webkit-file-upload-button {\n        font: inherit;\n        -webkit-appearance: button\n    }\n\n    .h1, h2 {\n        margin-bottom: .5rem;\n        font-weight: 500;\n        line-height: 1.2\n    }\n\n    .h1 {\n        font-size: 2.5rem\n    }\n\n    h2 {\n        font-size: 2rem\n    }\n\n    small {\n        font-size: 80%;\n        font-weight: 400\n    }\n\n    .container {\n        width: 100%;\n        padding-right: 15px;\n        padding-left: 15px;\n        margin-right: auto;\n        margin-left: auto\n    }\n\n    @media (min-width:576px) {\n        .container {\n            max-width: 540px\n        }\n    }\n\n    @media (min-width:768px) {\n        .container {\n            max-width: 720px\n        }\n    }\n\n    @media (min-width:992px) {\n        .container {\n            max-width: 960px\n        }\n    }\n\n    @media (min-width:1200px) {\n        .container {\n            max-width: 1140px\n        }\n    }\n\n    @media (min-width:576px) {\n        .container {\n            max-width: 540px\n        }\n    }\n\n    @media (min-width:768px) {\n        .container {\n            max-width: 720px\n        }\n    }\n\n    @media (min-width:992px) {\n        .container {\n            max-width: 960px\n        }\n    }\n\n    @media (min-width:1200px) {\n        .container {\n            max-width: 1140px\n        }\n    }\n\n    .row {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n        margin-right: -15px;\n        margin-left: -15px\n    }\n\n    .col-12 {\n        position: relative;\n        width: 100%;\n        padding-right: 15px;\n        padding-left: 15px\n    }\n\n    .col-12 {\n        -ms-flex: 0 0 100%;\n        flex: 0 0 100%;\n        max-width: 100%\n    }\n\n    .collapse:not(.show) {\n        display: none\n    }\n\n    .dropdown {\n        position: relative\n    }\n\n    .dropdown-menu {\n        position: absolute;\n        top: 100%;\n        left: 0;\n        z-index: 1000;\n        display: none;\n        float: left;\n        min-width: 10rem;\n        padding: .5rem 0;\n        margin: .125rem 0 0;\n        font-size: 1rem;\n        color: #212529;\n        text-align: left;\n        list-style: none;\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid rgba(0,0,0,.15);\n        border-radius: .25rem\n    }\n\n    .dropdown-menu-right {\n        right: 0;\n        left: auto\n    }\n\n    .dropdown-item {\n        display: block;\n        width: 100%;\n        padding: .25rem 1.5rem;\n        clear: both;\n        font-weight: 400;\n        color: #212529;\n        text-align: inherit;\n        white-space: nowrap;\n        background-color: transparent;\n        border: 0\n    }\n\n        .dropdown-item.disabled {\n            color: #6c757d;\n            background-color: transparent\n        }\n\n    .nav-link {\n        display: block;\n        padding: .5rem 1rem\n    }\n\n    .navbar {\n        position: relative;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n        -ms-flex-align: center;\n        align-items: center;\n        -ms-flex-pack: justify;\n        justify-content: space-between;\n        padding: .5rem 1rem\n    }\n\n    .navbar-brand {\n        display: inline-block;\n        padding-top: .3125rem;\n        padding-bottom: .3125rem;\n        margin-right: 1rem;\n        font-size: 1.25rem;\n        line-height: inherit;\n        white-space: nowrap\n    }\n\n    .navbar-nav {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        padding-left: 0;\n        margin-bottom: 0;\n        list-style: none\n    }\n\n        .navbar-nav .nav-link {\n            padding-right: 0;\n            padding-left: 0\n        }\n\n        .navbar-nav .dropdown-menu {\n            position: static;\n            float: none\n        }\n\n    .navbar-collapse {\n        -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n        -ms-flex-positive: 1;\n        flex-grow: 1;\n        -ms-flex-align: center;\n        align-items: center\n    }\n\n    .navbar-toggler {\n        padding: .25rem .75rem;\n        font-size: 1.25rem;\n        line-height: 1;\n        background-color: transparent;\n        border: 1px solid transparent;\n        border-radius: .25rem\n    }\n\n    .navbar-toggler-icon {\n        display: inline-block;\n        width: 1.5em;\n        height: 1.5em;\n        vertical-align: middle;\n        content: "";\n        background: no-repeat center center;\n        background-size: 100% 100%\n    }\n\n    @media (max-width:767.98px) {\n        .navbar-expand-md > .container {\n            padding-right: 0;\n            padding-left: 0\n        }\n    }\n\n    @media (min-width:768px) {\n        .navbar-expand-md {\n            -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n            -ms-flex-pack: start;\n            justify-content: flex-start\n        }\n\n            .navbar-expand-md .navbar-nav {\n                -ms-flex-direction: row;\n                flex-direction: row\n            }\n\n                .navbar-expand-md .navbar-nav .dropdown-menu {\n                    position: absolute\n                }\n\n                .navbar-expand-md .navbar-nav .nav-link {\n                    padding-right: .5rem;\n                    padding-left: .5rem\n                }\n\n            .navbar-expand-md > .container {\n                -ms-flex-wrap: nowrap;\n                flex-wrap: nowrap\n            }\n\n            .navbar-expand-md .navbar-collapse {\n                display: -ms-flexbox !important;\n                display: flex !important;\n                -ms-flex-preferred-size: auto;\n                flex-basis: auto\n            }\n\n            .navbar-expand-md .navbar-toggler {\n                display: none\n            }\n    }\n\n    .navbar-light .navbar-brand {\n        color: rgba(0,0,0,.9)\n    }\n\n    .navbar-light .navbar-nav .nav-link {\n        color: rgba(0,0,0,.5)\n    }\n\n    .navbar-light .navbar-toggler {\n        color: rgba(0,0,0,.5);\n        border-color: rgba(0,0,0,.1)\n    }\n\n    .navbar-light .navbar-toggler-icon {\n        background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'30\' height=\'30\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba(0, 0, 0, 0.5)\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")\n    }\n\n    .bg-white {\n        background-color: #fff !important\n    }\n\n    .d-flex {\n        display: -ms-flexbox !important;\n        display: flex !important\n    }\n\n    @media (min-width:768px) {\n        .d-md-inline-flex {\n            display: -ms-inline-flexbox !important;\n            display: inline-flex !important\n        }\n    }\n\n    .flex-grow-1 {\n        -ms-flex-positive: 1 !important;\n        flex-grow: 1 !important\n    }\n\n    .justify-content-start {\n        -ms-flex-pack: start !important;\n        justify-content: flex-start !important\n    }\n\n    .align-items-center {\n        -ms-flex-align: center !important;\n        align-items: center !important\n    }\n\n    @media (min-width:768px) {\n        .justify-content-md-end {\n            -ms-flex-pack: end !important;\n            justify-content: flex-end !important\n        }\n    }\n\n    .ml-2 {\n        margin-left: .5rem !important\n    }\n\n    .mb-4 {\n        margin-bottom: 1.5rem !important\n    }\n\n    .p-0 {\n        padding: 0 !important\n    }\n\n    .py-5 {\n        padding-top: 3rem !important\n    }\n\n    .py-5 {\n        padding-bottom: 3rem !important\n    }\n\n    .text-center {\n        text-align: center !important\n    }\n\n    .font-weight-bold {\n        font-weight: 700 !important\n    }\n\n    .text-dark {\n        color: #343a40 !important\n    }\n\n    #header {\n        z-index: 1030;\n        position: relative\n    }\n\n    .navbar-light .navbar-nav {\n        color: rgba(0,0,0,.5)\n    }\n\n        .navbar-light .navbar-nav .nav-link {\n            color: #000\n        }\n\n    :root {\n        --body-color: #F2F6F8;\n        --primary-color: 0,174,239;\n        --primary-color-defult: #00AEEF;\n        --secondary-color: 248,145,0;\n        --success-color: #24B502;\n        --secondary-badge-color: #FF9124;\n        --dark-gray: #959B94;\n        --dimgray-color: #707070;\n        --danger-color: #F50000;\n        --solidgray-color: #898989;\n        --silver-color: #B7B7B7;\n        --bg-light: #CBCBCB;\n        --primary-hover-color: #0096ce;\n        --dark-color: 0,0,0;\n        --black-color: #000000;\n        --dark-color-50: rgba(var(--dark-color), 0.5);\n        --font-family: \'Open Sans\',sans-serif;\n        --font-family-rubik: \'Rubik\',sans-serif;\n        --normal-font-size: 16px;\n        --normal-box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.16);\n        --button-height: 41px;\n        --input-height: 41px\n    }\n\n    html {\n        position: relative;\n        min-height: 100%\n    }\n\n    body {\n        font-family: var(--font-family-rubik);\n        background: var(--body-color);\n        font-size: var(--normal-font-size)\n    }\n\n    .h1, h2 {\n        font-weight: 500\n    }\n\n    .h1 {\n        font-size: 2.5rem\n    }\n\n    h2 {\n        font-size: 2rem\n    }\n\n    a {\n        color: rgb(var(--primary-color));\n        text-decoration: none;\n        background-color: transparent\n    }\n\n    .h-list * {\n        line-height: inherit;\n        margin-right: var(--item-gap);\n        list-style-type: none\n    }\n\n    .h-list :last-child {\n        margin-right: 0 !important\n    }\n\n    #main {\n        min-height: calc(100vh - 152px)\n    }\n\n    .dropdown .dropdown-menu a {\n        border-bottom: 1px solid rgba(var(--dark-color),.15);\n        padding: .35rem .8rem\n    }\n\n        .dropdown .dropdown-menu a:last-child {\n            border: 0\n        }\n\n    @media only screen and (max-width:767px) {\n        body {\n            font-size: 16px\n        }\n\n        .h1 {\n            font-size: 1.9rem\n        }\n    }\n\n    #overlay {\n        background: #fff;\n        color: #000;\n        position: fixed;\n        height: 100%;\n        width: 100%;\n        z-index: 5000;\n        top: 0;\n        left: 0;\n        text-align: center;\n        opacity: .8\n    }\n    .overlay-loader-inner{\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n    }\n\n    .spinner {\n        margin: 0 auto;\n        height: 64px;\n        width: 64px;\n        animation: rotate .8s infinite linear;\n        border: 5px solid rgb(var(--primary-color));\n        border-right-color: transparent;\n        border-radius: 50%\n    }\n\n    @keyframes rotate {\n        0% {\n            transform: rotate(0)\n        }\n\n        100% {\n            transform: rotate(360deg)\n        }\n    }\n',
        }}
      />
      <main id="main" role="main" className="simple_inner_page">
        <section className="text-dark py-5 l-h-2">
          <div className="container">
            <h1 className="font-weight-bold mb-4 h1 text-center">
              Terms and conditions
            </h1>
            <div className="row">
              <div className="col-12">
                <p>
                  <strong>MOBIMATTER LTD</strong> maintains the mobimatter.com
                  Website and its associated smartphone app (“Site”). The
                  following are the terms of use that govern use of the Site
                  (“Terms of Use”). By using the Site you expressly agree to be
                  bound by these Terms of Use and the mobimatter.com privacy
                  policy and to follow these Terms of Use and all applicable
                  laws and regulations governing use of the Site. MOBIMATTER LTD
                  reserves the right to change these Terms of Use at any time,
                  effective immediately upon posting on the Site. Please check
                  this page of the Site periodically. We will note when there
                  are updates to the Terms of Use at the bottom of the Terms of
                  Use. If you violate these Terms of Use, MOBIMATTER LTD may
                  terminate your use of the Site, bar you from future use of the
                  Site, and/or take appropriate legal action against you.
                </p>
                <p>
                  <strong>LIMITED LICENSE.</strong> You are granted a limited,
                  non-exclusive, revocable and non-transferable license to
                  utilize and access the Site pursuant to the requirements and
                  restrictions of these Terms of Use. MOBIMATTER LTD may change,
                  suspend, or discontinue any aspect of the Site at any time.
                  MOBIMATTER LTD may also, without notice or liability, impose
                  limits on certain features and services or restrict your
                  access to all or portions of the Site. You shall have no
                  rights to the proprietary software and related documentation,
                  if any, provided to you in order to access the Site. Except as
                  provided in the Terms of Use, you shall have no right to
                  directly or indirectly, own, use, loan, sell, rent, lease,
                  license, sublicense, assign, copy, translate, modify, adapt,
                  improve, or create any new or derivative works from, or
                  display, distribute, perform, or in any way exploit the Site,
                  or any of its contents (including software) in whole or in
                  part.
                </p>
                <p>
                  <strong>SITE OPERATION:</strong> MOBIMATTER LTD is controls
                  this Site from the Abu Dhabi Global Market (“ADGM”). If you
                  use this Site from other locations, you are responsible for
                  ensuring compliance with local laws. You may not use, export
                  or re-export any materials from this Site in violation of any
                  applicable laws or regulations.
                </p>
                <p>
                  <strong>APPLICABLE LAW.</strong> The Laws of ADGM shall govern
                  the use of the Site and the Terms of Use, without regards to
                  conflict of laws principals. All disputes arising in
                  connection therewith shall be heard only by a court of
                  competent jurisdiction in ADGM.
                </p>
                <p>
                  <strong>MULTI-CURRENCY PRICED TRANSACTION,</strong> the
                  displayed price and currency selected by you, will be the same
                  price and currency charged to the Card and printed on the
                  Transaction Receipt. Where optional extras or VAT applies, the
                  transaction amount will be clarified to you as a user as
                  “Total to pay” to avoid any confusion.
                </p>
                <p>
                  <strong>PURCHASES. MOBIMATTER LTD</strong> accepts payment by
                  Visa or Mastercard debit and credit cards for its products and
                  services. All online purchases are also governed by the terms
                  and conditions of respective merchant service providers.
                  Please review respective merchant service provider’s user
                  agreement and privacy policy before entering any transaction.
                  Interpretation. These Terms of Use supersede all other written
                  and oral communications or agreements with regards to the
                  subject matters discussed in these Terms of Use. A waiver or
                  modification of these Terms of Use will only be effective if
                  made in writing signed by an authorized officer of MOBIMATTER
                  LTD. All refunds will be made onto the original mode of
                  payment.
                </p>
                <p>
                  <strong>REPRESENTATIONS BY YOU.</strong> By visiting the Site,
                  you represent, warrant and covenant that (a) you are at least
                  18 years old; (b) that all materials of any kind submitted by
                  you to MOBIMATTER LTD through the Site or for inclusion on the
                  Site will not plagiarize, violate or infringe upon the rights
                  of any third-party including trade secret, copyright,
                  trademark, trade dress, privacy, patent, or other personal or
                  proprietary rights. The customer using the website who are
                  Minor /under the age of 18 shall not register as a User of the
                  website and shall not transact on or use the website.
                </p>
                <p>
                  <strong>PERMITTED USE.</strong> You agree that you are only
                  authorized to visit, view and to retain a copy of pages of
                  this Site for your own personal use, that you shall not
                  duplicate, download, publish, modify or otherwise distribute
                  the material on this Site for any purpose other than for
                  personal use, unless otherwise specifically authorized by
                  MOBIMATTER LTD to do so. The content and software on this Site
                  is the property of MOBIMATTER LTD. The cardholder must retain
                  a copy of transaction records and Merchant policies and rules.
                </p>
                <p>
                  <strong>YOUR ACCOUNT.</strong> If you use MOBIMATTER LTD Site,
                  you are responsible for maintaining the confidentiality of
                  your account and password and for restricting access to your
                  account from any devices, and you agree to accept
                  responsibility for all activities that occur under your
                  account or password. The Site shall not be responsible or
                  liable, directly or indirectly, in any way for any loss or
                  damage of any kind incurred as a result of, or in connection
                  with, your failure to comply with this section.
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>
                    <span>
                      <span style={{ color: "#000000" }}>
                        <strong>MOBIMATTER REWARDS TERMS AND CONDITIONS</strong>
                      </span>
                    </span>
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>
                    <span>
                      <span style={{ color: "#000000" }}>
                        Mobimatter Rewards is a loyalty and promotional program
                        of MobiMatter. Reward credits accumulated via the
                        program can be used to purchase products and services
                        offered on Mobimatter website and app. Reward credits
                        are granted for free by Mobimatter and cannot be
                        purchased independently.
                      </span>
                    </span>
                  </span>
                </p>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span>
                        <span style={{ color: "#000000" }}>
                          Mobimatter Rewards is only applicable for users who
                          are signed in and have a Mobimatter user account.
                          Users who sign-in to Mobimatter website or mobile app
                          are automatically registered to the Mobimatter Rewards
                          program and accept the Terms and Conditions listed
                          herein.
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span>
                        <span style={{ color: "#000000" }}>
                          Rewards credits are granted for free and are
                          denominated in USD. Rewards can only be used to
                          purchase products and services sold at Mobimatter app
                          or web. Rewards credit are non-transferrable,
                          non-negotiable, and non-cashable.
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span>
                        <span style={{ color: "#000000" }}>
                          Accumulation and utilization of Mobimatter Rewards
                          credits is subject to business rules determined by
                          Mobimatter. Mobimatter reserves the right to amend the
                          rules governing Rewards credit accumulation and
                          utilization rules at any time without prior
                          notice.&nbsp;
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span>
                        <span style={{ color: "#000000" }}>
                          Mobimatter Rewards credits will expire if no purchase
                          is made over a 12-month period.
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span>
                        <span style={{ color: "#000000" }}>
                          Mobimatter can, at its own discretion, partially or
                          fully revoke rewards credits of individual users, or
                          discontinue the Rewards program for all users. No user
                          shall have the right to contest any decision taken by
                          Mobimatter regarding the Mobimatter Rewards program or
                          individual or collective rewards credits.
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
                <p>
                  <span style={{ fontSize: "11pt" }}>
                    <span>
                      <span style={{ color: "#000000" }}>
                        <strong>Referral incentive</strong>
                      </span>
                    </span>
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>
                    <span>
                      <span style={{ color: "#000000" }}>
                        Referral incentive is part of Mobimatter Rewards
                        program. It is designed to encourage an existing
                        Mobimatter customer (‘the Referrer’) to promote
                        Mobimatter to a new customer (‘the Referee’). Both
                        Referrers and the Referees are rewarded in form of
                        Mobimatter Rewards credits.&nbsp;
                      </span>
                    </span>
                  </span>
                </p>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span>
                        <span style={{ color: "#000000" }}>
                          All Mobimatter signed-in customers who have made a
                          purchase will be supplied with a unique Referral Code.
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span>
                        <span style={{ color: "#000000" }}>
                          Referral incentives are granted when a new user with
                          no previous purchase history creates an account and
                          makes a purchase using the Referral Code supplied by
                          the Referrer.&nbsp;
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span>
                        <span style={{ color: "#000000" }}>
                          Referral Code use is optional, and the Referee may opt
                          to choose another form of incentive instead. Referral
                          incentives cannot be combined with any other discount,
                          promotion, or incentive.&nbsp;
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span>
                        <span style={{ color: "#000000" }}>
                          Referral Code can be used only once and only during
                          the first purchase of a new user.&nbsp; Regardless of
                          whether a Referral Code was used by the Referee during
                          the first purchase, it will not be applicable for
                          subsequent purchases.&nbsp;
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span>
                        <span style={{ color: "#000000" }}>
                          Mobimatter can at its own discretion revoke individual
                          customer or group of customers’ access to Referral
                          program, if it suspects abuse, fraud, or suspicious
                          activity.&nbsp;
                        </span>
                      </span>
                    </span>
                  </li>
                  <li style={{ listStyleType: "disc" }}>
                    <span style={{ fontSize: "11pt" }}>
                      <span>
                        <span style={{ color: "#000000" }}>
                          No user shall have the right to contest any decision
                          made by Mobimatter concerning any aspect of the
                          Mobimatter Rewards program and Referral incentive
                          sub-program, interpretation of these Terms and
                          Conditions, or the determination as to the
                          qualification of entries.&nbsp;
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
                <p>
                  <strong>NO COMMERCIAL USE.</strong> This Site may not be used
                  by you for any commercial purposes such as to conduct sales of
                  merchandise or services of any kind. You must obtain
                  MOBIMATTER LTD’s prior written consent to make commercial
                  offers of any kind on the Site, whether by advertising,
                  solicitations, links, or any other form of communication.
                  MOBIMATTER LTD will investigate and take appropriate legal
                  action against anyone who violates this provision, including
                  without limitation, removing the offending communication from
                  the Site and barring such violators from use of the Site.
                </p>
                <p>
                  <strong>COPYRIGHT POLICY.</strong> MOBIMATTER LTD may
                  terminate the privileges of any user who uses this Site to
                  unlawfully transmit copyrighted material without a license,
                  express consent, valid defence or fair use exemption to do so.
                  If you submit information to this Site, you warrant that the
                  information does not infringe the copyrights or other rights
                  of third parties.
                </p>
                <p>
                  <strong>INTELLECTUAL PROPERTY.</strong> Although MOBIMATTER
                  LTD is not responsible for the content, quality or accuracy of
                  data provided by users, compilations of such data, text,
                  information and other materials made available to users
                  through COMPANY’s system. The On-line Materials are MOBIMATTER
                  LTD’s intellectual property, and are protected by
                  international intellectual property laws. The On-line
                  Materials may not be copied or redistributed either in whole
                  or in part without prior written consent of MOBIMATTER LTD,
                  except as expressly and specifically permitted under these
                  Terms of Use.
                </p>
                <p>
                  <strong>The On-line Materials</strong> are and will remain the
                  exclusive property of MOBIMATTER LTD. All rights, titles and
                  interests in and to the On-line Materials will be and remain
                  vested solely in MOBIMATTER LTD. Under no circumstances will
                  you have any right, directly or indirectly, to own, use, copy,
                  loan, sell, rent, lease, license, sublicense, redistribute,
                  assign or otherwise convey the On- line Materials, or any
                  rights thereto, except as expressly and specifically provided
                  in the Terms of Use. Nothing in these Terms of Use will convey
                  to you any right, title or interest, except that of a license
                  with the express rights and subject to all limitations herein.
                  Nothing in these Terms of Use grants you the right, directly
                  or indirectly, to use the On-line Materials to create a
                  product for resale or to use the On-line Materials in any way
                  that competes with MOBIMATTER LTD.
                </p>
                <strong className="d-block mb-3">
                  DISCLAIMER OF WARRANTY, LIMITATION OF DAMAGES. MOBIMATTER LTD
                  MAKES NO WARRANTY OR REPRESENTATION OF ANY KIND, EITHER
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTY OF
                  TITLE OR NON-INFRINGEMENT OR IMPLIED WARRANTY OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                  NON-INFRINGEMENT OR OTHER VIOLATION OF RIGHTS IN RELATION TO
                  THE AVAILABILITY, ACCURACY, VALIDITY, RELIABILITY OR CONTENT
                  OF THESE PAGES AND/OR THE SITE. MOBIMATTER LTD ALSO DOES NOT
                  MAKE ANY REPRESENTATION OR WARRANTY REGARDING THE ACCURACY OR
                  RELIABILITY OF ANY ADVICE, OPINION, STATEMENT OR OTHER
                  INFORMATION THAT IS SUBMITTED, DISPLAYED OR UPLOADED THROUGH
                  THE SITE BY ANY USER. MOBIMATTER LTD SHALL NOT BE LIABLE FOR
                  ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL
                  DAMAGES, LOST PROFITS OR FOR BUSINESS INTERRUPTION ARISING OUT
                  OF THE USE OF OR INABILITY TO USE THIS SITE, EVEN IF
                  MOBIMATTER LTD HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
                  DAMAGES. SOME JURISDICTIONS DO NOT ALLOW EXCLUSION OF CERTAIN
                  WARRANTIES OR LIMITATIONS OF LIABILITY, SO THE ABOVE
                  LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU. THE LIABILITY
                  OF MOBIMATTER LTD WOULD IN SUCH CASE BE LIMITED TO THE
                  GREATEST EXTENT OF LIABILITY PERMITTED BY LAW.
                </strong>
                <p>
                  <strong>VIOLATION OF TERMS OF USE.</strong> You understand and
                  agree that in MOBIMATTER LTD’s sole discretion, and without
                  prior notice, MOBIMATTER LTD may terminate your access to the
                  Site, or exercise any other remedy available and remove any
                  unauthorized user information, if MOBIMATTER LTD believes that
                  the information you provide has violated or is inconsistent
                  with these Terms of Use, or violates the rights of MOBIMATTER
                  LTD, or any third party, or violates the law. You agree that
                  monetary damages may not provide a sufficient remedy to
                  MOBIMATTER LTD for violations of these Terms of Use and you
                  consent to injunctive or other equitable relief for such
                  violations. MOBIMATTER LTD may release user information about
                  you if required by law or subpoena.
                </p>
                <p>
                  <strong>INDEMNITY.</strong> You agree to indemnify and hold
                  MOBIMATTER LTD, its subsidiaries, affiliates, officers, agents
                  and other partners and employees, harmless from any loss,
                  liability, claim or demand, including reasonable attorneys’
                  fees, made by any third party due to or arising out of or
                  relating to your use of the Site, including also your use of
                  the Site to provide a link to another site or to upload
                  content or other information to the Site, or your breach of
                  the Terms of Use.
                </p>
                <p>
                  <strong>LICENCE GRANTED TO YOU.</strong> By providing
                  materials to MOBIMATTER LTD, including by submitting or
                  uploading content or materials for use on the Site you
                  represent and warrant that you or the owner of all rights to
                  such content or materials has expressly granted MOBIMATTER LTD
                  an irrevocable world-wide right in all languages and in
                  perpetuity to use and exploit all or any part of the content
                  and materials provided by you. MOBIMATTER LTD may publish and
                  distribute any such submitted content or materials at its sole
                  discretion by any method now existing or later developed. You
                  agree that you shall waive all claims and have no recourse
                  against MOBIMATTER LTD for any alleged or actual infringement
                  or misappropriation of any proprietary rights in any
                  communication, content or material submitted to MOBIMATTER
                  LTD. Any communication or materials you send to MOBIMATTER LTD
                  will be treated as non- confidential and non-proprietary and
                  may be disseminated or used by MOBIMATTER LTD for any purpose,
                  including, but not limited to, developing, creating,
                  manufacturing or marketing products or services.
                </p>
                <p>
                  <strong>ADVERTISING.</strong> The Site may contain
                  advertisements and / or sponsorships.The advertisers and / or
                  sponsors that provide these advertisements and sponsorships
                  are solely responsible for insuring that the materials
                  submitted for inclusion on the Site are accurate and comply
                  with all applicable laws.MOBIMATTER LTD is not responsible for
                  the acts or omissions of any advertiser or sponsor.
                </p>
                <p>
                  <strong>SEVERABILITY.</strong> If any provision of the Terms
                  of Use is held to be invalid, void or unenforceable, the
                  remaining provisions shall nevertheless continue in full force
                  and effect. Headings &amp; section titles in this Agreement
                  are for convenience and do not define, limit, or extend any
                  provision of this Agreement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
