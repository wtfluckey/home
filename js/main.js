//THIS FILE IS STREAMED AND MERGED WITH VARIABLES IN Babaganoush.Sitefinity.Mvc.Routes.RequireJsConfigModule
//THEN ADDED TO PAGE TO CONFIGURE REQUIREJS IN Babaganoush.Sitefinity.Utilities.RegisterClientSideStartup

//REGISTER THE SITEFINITY EMBEDDED RESOURCES
define('jquery', [], function () { return window.jQuery; });
define('kendo', [], function () { return kendo; });

//SPECIFY JQUERY COOKIE PATH IF NOT LOADED
if (!$.cookie) {
    require.config({
        paths: {
            cookie: '/WebResource.axd?d=X6rWLTNNJ7f-KIDSWX4QpHZax766Ptc3ThwgV5uqLRvfc0Kprj7rNfBr6ZfO18LyNzmIDvb30j189boaKxlj2ndDZGg8ilOfBeaHFbHUVHf7StCp8tv3psBPLfW4ddZzL0s95_BG2bf7KPP0mEM3LuhntS5RaibsAxZRo_N2N4ZuIha16mEOjgKTpBhqrYR50&t=635540355798981962'
        }
    });
} else {
    //REGISTER THE CURRENT JQUERY COOKIE PLUGIN
    define('cookie', [], function () { return $.cookie; });
}

//SPECIFY BLOCKUI PATH IF NOT LOADED
if (!$.blockUI) {
    require.config({
        paths: {
            blockui: '/WebResource.axd?d=0MMG3pICL03OuGYRtUSdkR0FZonLu8Lyyb1Wf86k0SP4Vodt_bRxC5XQo_Bay7f-Yz5N-4lEF_C2z3tgI-rYBGdwTOGhPrASx_E0SZ8PSrvlhtWbS2GXnM8bIMLCQamJVT8uJ-2X0_52oS4KeD3-993Qmxsr80oQDKNBCKM4KFhhYmIyssDzKfz63esf6nrD0&t=635540355798981962'
        }
    });
} else {
    //REGISTER THE CURRENT JQUERY COOKIE PLUGIN
    define('blockui', [], function () { return $.blockUI; });
}
                
//CONFIFURE SHORTCUT ALIASES
require.config({
    baseUrl: '/Scripts',
    paths: {
        text: '/WebResource.axd?d=00JJs3s505snKO2mL9-X-e06XOz9SdF-TAXQ0m-82o-uLGsRteHGjX3SmDlIs7GCpx8MBT-gd_InrijQL4XZkmH-6lId43Z_OZm6EOSk98Gl90kFzh_J1j8dsUH5IXiAwb1Uut6jUpBKD2GiC8Pb7nJeEVUFDhUK0DCDltTIUThmv4XUG9o88D-hg3Gl1yoT0&t=635540355798981962',
        css: '/WebResource.axd?d=7PRMUnMX1oKjU4Cv_mieMLbeRv77Sy5gYaPmI6TbGA5Ah8tOlcIkuzukdAo6ao7pwASX-Duyz77b3SZfmZnVoiZ-pNnor_6X9U8Kxg47PAIkcqHJiP6bJP-FVjgRv3vT-FoLyWUN9kCmmv2keYh8I_32hpCm3drctMqk0dUUf77q3Tsjw2O7RLNLpc4b0nFD0&t=635540355740285686',
        moment: '/WebResource.axd?d=8pLqrYI16lXn0lODVrpEqC1kzxq8B1clz4j5tAQC5UFp1ie62OoADoGg2kJ1GbCKa5xp8h4bllTqsGp3jTi3IFwouqUaDINjdlf1FTILj8gpAlDQXzpDPvpXsFBOQsQ1bIJeIqCedAzeAMtcOMlcsusI8948ZS7Kep4I4wB28msiwmC7oUnwF3inz9HvaJX90&t=635540355740285686',
        'moment-timezone': '/WebResource.axd?d=e9zwfHHOq0hl59-o2RS5uSAG7wtX6OlWM_ifzeI09p6GgCzC1lLERlJvLRG7mp1KTSopoTkZsLqS0fGr04NAT91V8AA9_edqt6bzDn_07bF8cXHzHVeLAVMjD4r5Mr7oDebaUm3xNSiOrGv59Gj--SoHdP133BcHsaCC28LTvHaLJDLVPy-wlNYxaMq3OQ0Jxpr_8Nv8B2J2rt5H6BHGQg2&t=635540355740285686',
        lodash: '/WebResource.axd?d=ZoF6V__ZVpQd-fGOK3lYQBAcgJB3F2cxEVDnMF_k-XmHGbk6AXZho_JT7krVvag-mRMb-oYXIIg5r49gMUkL2ty3YQ-pq31vBtQT_U9i3CNe5BeV9hOfKZVujmbRcSci-PvVAyA6nu-8qqbUq-xKzG8FdSwUT8hROGMR6o7gE9uA3tvEWJuTm3GWkX6GJU6VkRnMpKkhNO0-bYJEnHFlAw2&t=635540355740285686',
        'underscore.string': '/WebResource.axd?d=6VXGb_jumEw2QQETb-XnFL4f9HnmummE4pxxl7whLwwjShiEbJ6ipJZGMqJgrq8X_6VNiGtfHl-0M3Kmf0tkhhS8d2m8Tz33lRUczNt-TeMvA6hSZIUa2I8FIPaCVxKiPsKBA_N4WCypU8eeHY-J_ngTedUX9FbBLZ6KaRaLTf3JJ5w8YnTi62CAB4kpoMiC_-7AoRuivlQGlhSZjDgG3w2&t=635540355740285686',
        glide: '/WebResource.axd?d=cu3aAlo4z6RBrcAFLU4_rfbdsjsGPmLW_pBxmM2T0PW0svztB73FV40CUDk4c54j98fVX5fpGbG-zXBldVpELLgjmWu7OjZRFpg9di6dLlFPYzcHBKeQ1ecgPL_1Y7vqaxawmyE2mqxONgPN2G49sOa46xKKpwXRz6E_jlVmI3_4MT9sEdVQ-lJr6rBdC2_rBOgCap9G3b6fXuXEpI5yzw2&t=635540355740285686',
        url: '/WebResource.axd?d=MBXmog4aUuYllEXwIMHEtu71Ntww0wzsT2GazGh917q2IdrdPA_kPNYnfM4LhyzFrPf0vRS4-eIDDElSNKTaHDGPykTuWUB3i3i86dTXhKHzCKUtxgmYf7-tWIkrQhbh7qLPjb6r3jS2VZRhppe89SFV_FA2Tkx4EWEzYts7VRn7N90iAI2ej9S6tULK0m_m0&t=635540355740285686',
        loStorage: '/WebResource.axd?d=Bh5CRF7ZvTH-CAHyiw0Wuz2gPqwOGppgUKkLzq1blZXMN3bjziCFg-AbEy-HOSuRg6CrnSpzWCDM6IdpBIW_MOsxPx2TDLUqcufui65ByfJsq0A1n7bNuO_tNyy5q1wbCw340d555HveyNiTaqgw_5VLeR17F1evH3S45IgmCisI4lpN_xFJZxtU-8bfLXi2sMz8NBPn8b4h6RP7gZDEKQ2&t=635540355740285686',
        'baba/api': '/WebResource.axd?d=FoHz0Oyo9_i-1ln4WvMq6K1oV_h5owon08eUsT8xmeWHql_hKMY5kLopm9RBVxXrYlUee5Bg4vWFtYlA1awD7d61wZJJfE4_3py6x_F9ayCs9AUfrzNuKoW-Os8gg7i9DMaXVQKrwnZn0ncTU33zMb-qtbEmvFp8X7syk-LoOLJ7eDp2YcwXNqLoOqC9KBfJ0&t=635540355740285686',
        'baba/helpers': '/WebResource.axd?d=mFfP077onBpOi2t9Clc2PyLwmta3W5jUhjvObMI07_Vds0nfn4t6sdF-BRAIZ4uJ0C1-_FlMEMCtr3tOiR9RqT7Sm_hLnt-JKwWfiuQqcuLJZAt4y4MHgAocoH3Tr0O6CcJ_HKDlVAtyijQqGgaAI1IasuArvyo4Hpg91PuXYJ7luz8M3Oim2u27dB6nm5mZ0&t=635540355740285686',
        'baba/alerts': '/WebResource.axd?d=uzB6AjLY-u99eOqp-ghDwcjQN1ESxO7UoD9KyKMsG1K3q3Ni088V31o4EzkVPLAtyyLUKgUIdJrPOzmsIkT44CsORWH06GIQUymr7G6OyesSN7aklWYIzi_pvaIyz0BbqCAQKIll4SBKv04AlxU1eSWTyhWsIAmE2G8-zRQ_KpjJJ8khGifReUr-Kg-E7rIV0&t=635540355740285686'
    },
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        url: {
            exports: 'url'
        }
    }
});

//HANDLE UNDERSCORE AND MERGING STRINGS PLUGIN
define('underscore', [
    'lodash',
    'underscore.string'
], function (_, _s) {
    //MERGE STRING PLUGIN TO UNDERSCORE NAMESPACE
    _.mixin(_s.exports());
    return _;
});

//INITIALIZE APP
require([
    'underscore'
], function (_) {

    var init = function () {
        //ADD TITLE TO HTML TAG AS CLASS
        if (document.title)
            $(document.documentElement)
              .addClass(_.slugify(document.title));

        //ON DOC READY
        $(function () {
            //INITIALIZE APP PARTS
            initElements();
        });
    };

    var initElements = function () {

    };

    //INITIALIZE APP
    init();
});
