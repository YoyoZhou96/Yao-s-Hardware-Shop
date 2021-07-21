const Order = require("./Order");

const OrderState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    BULBS: Symbol("bulbs"),
    CLEANERS: Symbol("cleaners"),
    FILTERS: Symbol("filters"),
    SCREEN: Symbol("screen"),
    EXTRAS:  Symbol("extras")
});

module.exports = class LockDownEssentials extends Order {
    constructor(sNumber, sUrl) {
        super(sNumber, sUrl);
        this.stateCur = OrderState.WELCOMING;
        this.sBulbs = "";
        this.sCleaners = "";
        this.sFilters = "";
        this.sScreen = "";
        this.sExtras = "";
    }
    handleInput(sInput) {
        let aReturn = [];
        switch (this.stateCur) {
            case OrderState.WELCOMING:
                this.stateCur = OrderState.BULBS;
                aReturn.push("Welcome to Yao's Home Hardware Shop.");
                aReturn.push(`For a list of what we sell tap:`);
                aReturn.push(`${this.sUrl}/payment/${this.sNumber}/`);
                aReturn.push("Would you like Light-bulbs or NO?");
                break;
            case OrderState.BULBS:
                this.stateCur = OrderState.CLEANERS;
                if (sInput.toLowerCase() != "no") {
                    this.sBulbs = sInput;
                }
                aReturn.push("Would you like Household cleaners or NO?");
                break;
            case OrderState.CLEANERS:
                this.stateCur = OrderState.FILTERS;
                if (sInput.toLowerCase() != "no") {
                    this.sCleaners = sInput;
                }
                aReturn.push("Would you like Furnace filters or NO?");
                break;
            case OrderState.FILTERS:
                this.stateCur = OrderState.SCREEN;
                if (sInput.toLowerCase() != "no") {
                    this.sFilters = sInput;
                }
                aReturn.push("Would you like Screen or NO?");
                break;
            case OrderState.SCREEN:
                this.stateCur = OrderState.EXTRAS;
                if (sInput.toLowerCase() != "no") {
                    this.sScreen = sInput;
                }
                aReturn.push("Would you like Ladder, Power Tools, Wet and Dry Vacuums and other extra hardware or NO?");
                break;
            case OrderState.EXTRAS:
                if(sInput.toLowerCase() != "no"){
                    this.sExtras = sInput;
                }
                aReturn.push("Thank-you for your order of");
                this.nTotal = 0;
                if (this.sBulbs) {
                    aReturn.push(this.sBulbs);
                    this.nTotal += 19.97;
                } 
                if (this.sCleaners) {
                    aReturn.push(this.sCleaners);
                    this.nTotal += 14.98;
                }
                if (this.sFilters) {
                    aReturn.push(this.sFilters);
                    this.nTotal += 44.95;
                }
                if (this.sScreen) {
                    aReturn.push(this.sScreen);
                    this.nTotal += 38.12;
                }
                if (this.sExtras) {
                    aReturn.push(this.sExtras);
                    this.nTotal += 98.88;
                }
                aReturn.push(`Your total comes to ${this.nTotal}`);
                aReturn.push(`We will text you from 444-111-1111 when your order is ready or if we have questions.`)
                this.isDone(true);
                break;
        }
        return aReturn;
    }
    renderForm() {
        // your client id should be kept private
        return (`
        <html>

            <head>
                <meta content="text/html; charset=UTF-8" http-equiv="content-type">
                <style type="text/css">
                    ol {
                        margin: 0;
                        padding: 0
                    }

                    table td,
                    table th {
                        padding: 0
                    }

                    .c7 {
                        border-right-style: solid;
                        padding: 5pt 5pt 5pt 5pt;
                        border-bottom-color: #000000;
                        border-top-width: 1pt;
                        border-right-width: 1pt;
                        border-left-color: #000000;
                        vertical-align: top;
                        border-right-color: #000000;
                        border-left-width: 1pt;
                        border-top-style: solid;
                        border-left-style: solid;
                        border-bottom-width: 1pt;
                        width: 225.7pt;
                        border-top-color: #000000;
                        border-bottom-style: solid
                    }

                    .c10 {
                        color: #000000;
                        font-weight: 700;
                        text-decoration: none;
                        vertical-align: baseline;
                        font-size: 15pt;
                        font-family: "Arial";
                        font-style: normal
                    }

                    .c0 {
                        color: #000000;
                        font-weight: 400;
                        text-decoration: none;
                        vertical-align: baseline;
                        font-size: 11pt;
                        font-family: "Arial";
                        font-style: normal
                    }

                    .c13 {
                        color: #000000;
                        font-weight: 700;
                        text-decoration: none;
                        vertical-align: baseline;
                        font-size: 18pt;
                        font-family: "Arial";
                        font-style: normal
                    }

                    .c5 {
                        color: #000000;
                        font-weight: 400;
                        text-decoration: none;
                        vertical-align: baseline;
                        font-size: 15pt;
                        font-family: "Arial";
                        font-style: normal
                    }

                    .c2 {
                        color: #000000;
                        font-weight: 700;
                        text-decoration: none;
                        vertical-align: baseline;
                        font-size: 20pt;
                        font-family: "Arial";
                        font-style: normal
                    }

                    .c12 {
                        color: #000000;
                        font-weight: 400;
                        text-decoration: none;
                        vertical-align: baseline;
                        font-size: 12pt;
                        font-family: "Arial";
                        font-style: normal
                    }

                    .c3 {
                        padding-top: 0pt;
                        padding-bottom: 0pt;
                        line-height: 1.15;
                        orphans: 2;
                        widows: 2;
                        text-align: left
                    }

                    .c8 {
                        padding-top: 0pt;
                        padding-bottom: 0pt;
                        line-height: 1.0;
                        text-align: center
                    }

                    .c14 {
                        border-spacing: 0;
                        border-collapse: collapse;
                        margin-right: auto
                    }

                    .c1 {
                        padding-top: 0pt;
                        padding-bottom: 0pt;
                        line-height: 1.0;
                        text-align: left
                    }

                    .c11 {
                        background-color: #ffffff;
                        max-width: 451.4pt;
                        padding: 72pt 72pt 72pt 72pt
                    }

                    .c9 {
                        color: #494c4e;
                        font-size: 14.5pt
                    }

                    .c4 {
                        height: 0pt
                    }

                    .c6 {
                        height: 11pt
                    }

                    .title {
                        padding-top: 0pt;
                        color: #000000;
                        font-size: 26pt;
                        padding-bottom: 3pt;
                        font-family: "Arial";
                        line-height: 1.15;
                        page-break-after: avoid;
                        orphans: 2;
                        widows: 2;
                        text-align: left
                    }

                    .subtitle {
                        padding-top: 0pt;
                        color: #666666;
                        font-size: 15pt;
                        padding-bottom: 16pt;
                        font-family: "Arial";
                        line-height: 1.15;
                        page-break-after: avoid;
                        orphans: 2;
                        widows: 2;
                        text-align: left
                    }

                    li {
                        color: #000000;
                        font-size: 11pt;
                        font-family: "Arial"
                    }

                    p {
                        margin: 0;
                        color: #000000;
                        font-size: 11pt;
                        font-family: "Arial"
                    }

                    h1 {
                        padding-top: 20pt;
                        color: #000000;
                        font-size: 20pt;
                        padding-bottom: 6pt;
                        font-family: "Arial";
                        line-height: 1.15;
                        page-break-after: avoid;
                        orphans: 2;
                        widows: 2;
                        text-align: left
                    }

                    h2 {
                        padding-top: 18pt;
                        color: #000000;
                        font-size: 16pt;
                        padding-bottom: 6pt;
                        font-family: "Arial";
                        line-height: 1.15;
                        page-break-after: avoid;
                        orphans: 2;
                        widows: 2;
                        text-align: left
                    }

                    h3 {
                        padding-top: 16pt;
                        color: #434343;
                        font-size: 14pt;
                        padding-bottom: 4pt;
                        font-family: "Arial";
                        line-height: 1.15;
                        page-break-after: avoid;
                        orphans: 2;
                        widows: 2;
                        text-align: left
                    }

                    h4 {
                        padding-top: 14pt;
                        color: #666666;
                        font-size: 12pt;
                        padding-bottom: 4pt;
                        font-family: "Arial";
                        line-height: 1.15;
                        page-break-after: avoid;
                        orphans: 2;
                        widows: 2;
                        text-align: left
                    }

                    h5 {
                        padding-top: 12pt;
                        color: #666666;
                        font-size: 11pt;
                        padding-bottom: 4pt;
                        font-family: "Arial";
                        line-height: 1.15;
                        page-break-after: avoid;
                        orphans: 2;
                        widows: 2;
                        text-align: left
                    }

                    h6 {
                        padding-top: 12pt;
                        color: #666666;
                        font-size: 11pt;
                        padding-bottom: 4pt;
                        font-family: "Arial";
                        line-height: 1.15;
                        page-break-after: avoid;
                        font-style: italic;
                        orphans: 2;
                        widows: 2;
                        text-align: left
                    }
                </style>
            </head>

            <body class="c11">
                <p class="c3"><span class="c2">Welcome to Yao&rsquo;s Home Hardware Shop </span></p>
                <p class="c3 c6"><span class="c2"></span></p>
                <p class="c3"><span class="c2">For curbside pickup: </span></p>
                <p class="c3"><span class="c2">Text &ldquo;Hello&rdquo; or &ldquo;Hi&rdquo; to 444-111-1111</span></p>
                <p class="c3 c6"><span class="c0"></span></p><a id="t.e3600ea2567ac16cabf483ee1958b0ad11d44e42"></a><a id="t.0"></a>
                <table class="c14">
                    <tbody>
                        <tr class="c4">
                            <td class="c7" colspan="1" rowspan="1">
                                <p class="c8"><span class="c10">Items</span></p>
                            </td>
                            <td class="c7" colspan="1" rowspan="1">
                                <p class="c8"><span class="c10">Price</span></p>
                            </td>
                        </tr>
                        <tr class="c4">
                            <td class="c7" colspan="1" rowspan="1">
                                <p class="c1"><span class="c9">Light-bulbs</span></p>
                            </td>
                            <td class="c7" colspan="1" rowspan="1">
                                <p class="c1"><span class="c0">$ 19.97</span></p>
                            </td>
                        </tr>
                        <tr class="c4">
                            <td class="c7" colspan="1" rowspan="1">
                                <p class="c1"><span class="c9">Household cleaners</span></p>
                            </td>
                            <td class="c7" colspan="1" rowspan="1">
                                <p class="c1"><span class="c0">$ 14.98</span></p>
                            </td>
                        </tr>
                        <tr class="c4">
                            <td class="c7" colspan="1" rowspan="1">
                                <p class="c1"><span class="c9">Furnace filters</span></p>
                            </td>
                            <td class="c7" colspan="1" rowspan="1">
                                <p class="c1"><span class="c0">$ 44.95</span></p>
                            </td>
                        </tr>
                        <tr class="c4">
                            <td class="c7" colspan="1" rowspan="1">
                                <p class="c1"><span class="c9">Screen</span></p>
                            </td>
                            <td class="c7" colspan="1" rowspan="1">
                                <p class="c1"><span class="c0">$ 38.12</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p class="c3 c6"><span class="c0"></span></p>
                <p class="c3 c6"><span class="c0"></span></p>
                <p class="c3 c6"><span class="c0"></span></p>
                <p class="c3"><span class="c5">We also have a selection of Power Tools, Wet &amp; Dry Vacuums, Ladders and other
                        home hardwares.</span></p>
                <p class="c3 c6"><span class="c12"></span></p>
                <p class="c3"><span class="c13">Hope you will have a nice shopping experience!</span></p>
            </body>

            </html>  `);

    }
}
