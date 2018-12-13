/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'button',
                            display: 'block',
                            type: 'group',
                            rect: ['275px', '480px', '250', '55', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: 0,
                            transform: [[],[],[],['1.5','1.5']],
                            c: [
                            {
                                id: 'button-shadow',
                                display: 'block',
                                type: 'rect',
                                rect: ['0', '5', '250', '50', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(83,83,83,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'button-bg',
                                display: 'block',
                                type: 'rect',
                                rect: ['0', '0', '250', '50', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(83,83,83,1.00)",[270,[['rgba(51,135,187,1.00)',0],['rgba(0,105,170,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'button-txt',
                                display: 'block',
                                type: 'text',
                                rect: ['37', '14', '175', '22', 'auto', 'auto'],
                                text: "START",
                                align: "center",
                                font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", ""],
                                textStyle: ["5px", "", "", ""]
                            }]
                        },
                        {
                            id: 'question1',
                            symbolName: 'question1',
                            display: 'none',
                            type: 'rect',
                            rect: ['50', '60', '700', '480', 'auto', 'auto']
                        },
                        {
                            id: 'question2',
                            symbolName: 'question2',
                            display: 'none',
                            type: 'rect',
                            rect: ['50', '60', '700', '480', 'auto', 'auto']
                        },
                        {
                            id: 'question3',
                            symbolName: 'question3',
                            display: 'none',
                            type: 'rect',
                            rect: ['60', '60', '700', '480', 'auto', 'auto']
                        },
                        {
                            id: 'question4',
                            symbolName: 'question4',
                            display: 'none',
                            type: 'rect',
                            rect: ['50', '60', '700', '480', 'auto', 'auto']
                        },
                        {
                            id: 'incorrect-sym',
                            symbolName: 'incorrect-sym',
                            display: 'none',
                            type: 'rect',
                            rect: ['250', '490', '300', '50', 'auto', 'auto']
                        },
                        {
                            id: 'question-txt',
                            display: 'none',
                            type: 'text',
                            rect: ['5', '5', '125', '50', 'auto', 'auto'],
                            tabindex: '2',
                            text: "QUESTION",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [14, "px"], "rgba(83,83,83,1.00)", "700", "none", "normal", "break-word", ""],
                            textStyle: ["2px", "", "40px", ""]
                        },
                        {
                            id: 'question-number',
                            display: 'none',
                            type: 'text',
                            rect: ['130', '5', '100', '50', 'auto', 'auto'],
                            tabindex: '3',
                            text: "#",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [14, "px"], "rgba(83,83,83,1.00)", "700", "none", "normal", "break-word", ""],
                            textStyle: ["2px", "", "40px", ""]
                        },
                        {
                            id: 'end-button',
                            display: 'none',
                            type: 'group',
                            rect: ['267', '362', '250', '55', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: 0,
                            transform: [[],[],[],['1.5','1.5']],
                            c: [
                            {
                                id: 'end-button-shadow',
                                type: 'rect',
                                rect: ['0', '5', '250', '50', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(83,83,83,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'end-button-bg',
                                type: 'rect',
                                rect: ['0', '0', '250', '50', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(83,83,83,1.00)",[270,[['rgba(51,135,187,1.00)',0],['rgba(0,105,170,1.00)',100]]]],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'end-button-txt',
                                type: 'text',
                                rect: ['37', '14', '175', '22', 'auto', 'auto'],
                                text: "REPLAY",
                                align: "center",
                                font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", ""],
                                textStyle: ["5px", "", "", ""]
                            }]
                        },
                        {
                            id: 'end-txt',
                            display: 'none',
                            type: 'text',
                            rect: ['100', '183', '600', '164px', 'auto', 'auto'],
                            tabindex: '1',
                            opacity: 0,
                            text: "Great Job!",
                            align: "center",
                            font: ['Times New Roman, Times, serif', [72, "px"], "rgba(83,83,83,1.00)", "bold", "none", "italic", "break-word", ""],
                            textShadow: ["rgba(255,255,255,0.80)", 0, 2, 0],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'Magnifying_Glass_And_Laptop_Shows_Search_Searching_And_Research_Image_courtesy_of_Stuart_Miles_FreeDigitalPhotosnet-1',
                            display: 'block',
                            type: 'image',
                            rect: ['199px', '48px', '400px', '375px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"Magnifying_Glass_And_Laptop_Shows_Search_Searching_And_Research_Image_courtesy_of_Stuart_Miles_FreeDigitalPhotos.net-1.jpg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800', '600', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(197,209,213,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 12000,
                    autoPlay: true,
                    labels: {
                        "intro": 0,
                        "question1": 2000,
                        "question2": 4000,
                        "question3": 6000,
                        "question4": 8000,
                        "question5": 10000
                    },
                    data: [
                        [
                            "eid112",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${question-number}",
                            'none',
                            'block'
                        ],
                        [
                            "eid192",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${question-number}",
                            'block',
                            'none'
                        ],
                        [
                            "eid183",
                            "opacity",
                            10750,
                            750,
                            "linear",
                            "${end-button}",
                            '0',
                            '1'
                        ],
                        [
                            "eid237",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid125",
                            "display",
                            2000,
                            0,
                            "easeInBack",
                            "${button}",
                            'none',
                            'none'
                        ],
                        [
                            "eid114",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${incorrect-sym}",
                            'none',
                            'block'
                        ],
                        [
                            "eid113",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${question-txt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid193",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${question-txt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid181",
                            "scaleX",
                            10000,
                            750,
                            "easeOutBack",
                            "${end-txt}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid167",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${question3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid169",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${question3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid178",
                            "opacity",
                            10000,
                            750,
                            "linear",
                            "${end-txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "scaleY",
                            250,
                            750,
                            "easeOutBack",
                            "${button}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid116",
                            "scaleY",
                            1000,
                            500,
                            "easeInBack",
                            "${button}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid176",
                            "display",
                            0,
                            0,
                            "linear",
                            "${question4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid175",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${question4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid171",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${question4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid103",
                            "scaleX",
                            250,
                            750,
                            "easeOutBack",
                            "${button}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid115",
                            "scaleX",
                            1000,
                            500,
                            "easeInBack",
                            "${button}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid235",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Magnifying_Glass_And_Laptop_Shows_Search_Searching_And_Research_Image_courtesy_of_Stuart_Miles_FreeDigitalPhotosnet-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${Magnifying_Glass_And_Laptop_Shows_Search_Searching_And_Research_Image_courtesy_of_Stuart_Miles_FreeDigitalPhotosnet-1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid107",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${button}",
                            '0',
                            '1'
                        ],
                        [
                            "eid117",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${button}",
                            '1',
                            '0'
                        ],
                        [
                            "eid127",
                            "display",
                            2000,
                            0,
                            "easeInBack",
                            "${button-bg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            2000,
                            0,
                            "easeInBack",
                            "${button-shadow}",
                            'block',
                            'none'
                        ],
                        [
                            "eid126",
                            "display",
                            2000,
                            0,
                            "easeInBack",
                            "${button-txt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid159",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${question1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid165",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${question1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid185",
                            "scaleY",
                            10750,
                            750,
                            "easeOutBack",
                            "${end-button}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid228",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Magnifying_Glass_And_Laptop_Shows_Search_Searching_And_Research_Image_courtesy_of_Stuart_Miles_FreeDigitalPhotosnet-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid180",
                            "scaleY",
                            10000,
                            750,
                            "easeOutBack",
                            "${end-txt}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid195",
                            "display",
                            10750,
                            0,
                            "linear",
                            "${end-button}",
                            'none',
                            'block'
                        ],
                        [
                            "eid187",
                            "scaleX",
                            10750,
                            750,
                            "easeOutBack",
                            "${end-button}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid164",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${question2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid168",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${question2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid194",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${end-txt}",
                            'none',
                            'block'
                        ],
                            [ "eid160", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${question1}', [] ] ],
                            [ "eid166", "trigger", 4000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${question2}', [] ] ],
                            [ "eid172", "trigger", 6000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${question3}', [] ] ],
                            [ "eid173", "trigger", 8000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${question4}', [] ] ]
                    ]
                }
            },
            "incorrect-sym": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'center',
                            opacity: '0',
                            id: 'incorrect-txt',
                            rect: [0, 10, 300, 50, 'auto', 'auto'],
                            textShadow: ['rgba(255,255,255,0.80)', '0px', '1px', '0px'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(142,35,25,1.00)', '700', 'none', 'italic', '', ''],
                            display: 'none',
                            textStyle: ['', '', '40px', ''],
                            clip: 'rect(50px 300px 50px 0px)',
                            text: 'try again...'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 300, 50]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid77",
                            "clip",
                            0,
                            500,
                            "easeOutQuart",
                            "${incorrect-txt}",
                            [50,300,50,0],
                            [0,300,50,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid78",
                            "top",
                            0,
                            500,
                            "easeOutBack",
                            "${incorrect-txt}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid74",
                            "display",
                            0,
                            0,
                            "linear",
                            "${incorrect-txt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid75",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${incorrect-txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${incorrect-txt}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "question1": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'center',
                            text: 'Select an answer to continue...',
                            font: ['Times New Roman, Times, serif', [20, ''], 'rgba(83,83,83,1)', '400', 'none', 'italic', '', ''],
                            display: 'none',
                            id: 'prompt',
                            rect: [0, 480, 699, '31px', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: 'Which one of the guidelines is not part of the scientific method?',
                            tabindex: '1',
                            rect: [0, 64, 700, 200, 'auto', 'auto'],
                            id: 'question',
                            textStyle: ['', '', '40px', ''],
                            font: ['Times New Roman, Times, serif', [38, 'px'], 'rgba(83,83,83,1.00)', '700', 'none', 'italic', '', ''],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']],
                            textShadow: ['rgba(255,255,255,0.80)', '0px', '2px', '0px'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer1',
                            text: 'A. Never jump to conclusions',
                            cursor: 'pointer',
                            tabindex: '2',
                            rect: [100, 190, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer2',
                            text: 'B. Determine how the data was gathered',
                            cursor: 'pointer',
                            tabindex: '3',
                            rect: [100, 240, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer3',
                            text: 'C. Keep an open mind',
                            cursor: 'pointer',
                            tabindex: '4',
                            rect: [100, 290, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer4',
                            text: 'D. Never accept someone\'s conclusions',
                            cursor: 'pointer',
                            tabindex: '5',
                            rect: [100, 340, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer4Copy',
                            text: 'E. Determine why someone is making the argument',
                            cursor: 'pointer',
                            tabindex: '5',
                            rect: [100, 390, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'correct-txt',
                            opacity: '0',
                            rect: [200, 440, 300, 50, 'auto', 'auto'],
                            font: ['Times New Roman, Times, serif', [36, 'px'], 'rgba(125,142,39,1.00)', '700', 'none', 'italic', '', ''],
                            textShadow: ['rgba(255,255,255,0.8)', 0, '1px', 0],
                            textStyle: ['', '', '40px', ''],
                            display: 'none',
                            align: 'center',
                            clip: 'rect(50px 300px 50px 0px)',
                            text: 'correct!'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 700, 480]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid36",
                            "top",
                            200,
                            200,
                            "linear",
                            "${answer3}",
                            '290px',
                            '300px'
                        ],
                        [
                            "eid198",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${prompt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid199",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${prompt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid26",
                            "opacity",
                            300,
                            200,
                            "linear",
                            "${answer4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid162",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${answer4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid56",
                            "clip",
                            571,
                            500,
                            "easeOutQuart",
                            "${correct-txt}",
                            [50,300,50,0],
                            [0,300,50,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid37",
                            "top",
                            100,
                            200,
                            "linear",
                            "${answer2}",
                            '240px',
                            '250px'
                        ],
                        [
                            "eid23",
                            "opacity",
                            0,
                            200,
                            "linear",
                            "${answer1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            845,
                            250,
                            "linear",
                            "${answer1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid45",
                            "display",
                            571,
                            0,
                            "linear",
                            "${correct-txt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6",
                            "opacity",
                            0,
                            250,
                            "easeOutBack",
                            "${question}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${question}",
                            '1',
                            '0'
                        ],
                        [
                            "eid217",
                            "opacity",
                            400,
                            171,
                            "linear",
                            "${answer4Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid218",
                            "opacity",
                            845,
                            214,
                            "linear",
                            "${answer4Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid25",
                            "opacity",
                            100,
                            200,
                            "linear",
                            "${answer2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "opacity",
                            845,
                            250,
                            "linear",
                            "${answer2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid38",
                            "top",
                            300,
                            200,
                            "linear",
                            "${answer4}",
                            '340px',
                            '350px'
                        ],
                        [
                            "eid196",
                            "display",
                            250,
                            0,
                            "linear",
                            "${prompt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid197",
                            "display",
                            750,
                            0,
                            "linear",
                            "${prompt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid58",
                            "opacity",
                            571,
                            500,
                            "linear",
                            "${correct-txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${correct-txt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid216",
                            "top",
                            400,
                            171,
                            "linear",
                            "${answer4Copy}",
                            '390px',
                            '400px'
                        ],
                        [
                            "eid4",
                            "scaleY",
                            0,
                            250,
                            "easeOutBack",
                            "${question}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            200,
                            200,
                            "linear",
                            "${answer3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            845,
                            250,
                            "linear",
                            "${answer3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid59",
                            "top",
                            571,
                            500,
                            "easeOutBack",
                            "${correct-txt}",
                            '440px',
                            '430px'
                        ],
                        [
                            "eid2",
                            "scaleX",
                            0,
                            250,
                            "easeOutBack",
                            "${question}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid35",
                            "top",
                            0,
                            200,
                            "linear",
                            "${answer1}",
                            '190px',
                            '200px'
                        ]
                    ]
                }
            },
            "question2": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'center',
                            text: 'Select an answer to continue...',
                            font: ['Times New Roman, Times, serif', [20, ''], 'rgba(83,83,83,1)', '400', 'none', 'italic', '', ''],
                            display: 'none',
                            id: 'promptCopy',
                            rect: [0, 480, 699, '31px', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: 'Critical thinking parallels the ________ used in other sciences.',
                            tabindex: '1',
                            rect: [0, 65, 700, 200, 'auto', 'auto'],
                            id: 'question',
                            textStyle: ['', '', '40px', ''],
                            font: ['Times New Roman, Times, serif', [38, 'px'], 'rgba(83,83,83,1.00)', '700', 'none', 'italic', '', ''],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']],
                            textShadow: ['rgba(255,255,255,0.80)', '0px', '2px', '0px'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer1',
                            text: 'A. data',
                            cursor: 'pointer',
                            tabindex: '2',
                            rect: [100, 190, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer2',
                            text: 'B. scientific method',
                            cursor: 'pointer',
                            tabindex: '3',
                            rect: [100, 240, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer3',
                            text: 'C. statistics',
                            cursor: 'pointer',
                            tabindex: '4',
                            rect: [100, 290, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer4',
                            text: 'D. conclusions',
                            cursor: 'pointer',
                            tabindex: '5',
                            rect: [100, 340, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer4Copy2',
                            text: 'E. all of the above',
                            cursor: 'pointer',
                            tabindex: '5',
                            rect: [100, 365, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'correct-txt',
                            opacity: '0',
                            rect: [200, 440, 300, 50, 'auto', 'auto'],
                            font: ['Times New Roman, Times, serif', [36, 'px'], 'rgba(125,142,39,1.00)', '700', 'none', 'italic', '', ''],
                            textShadow: ['rgba(255,255,255,0.8)', 0, '1px', 0],
                            textStyle: ['', '', '40px', ''],
                            display: 'none',
                            align: 'center',
                            clip: 'rect(50px 300px 50px 0px)',
                            text: 'correct!'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 700, 480]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid36",
                            "top",
                            200,
                            200,
                            "linear",
                            "${answer3}",
                            '290px',
                            '300px'
                        ],
                        [
                            "eid26",
                            "opacity",
                            300,
                            200,
                            "linear",
                            "${answer4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid162",
                            "opacity",
                            850,
                            250,
                            "linear",
                            "${answer4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid56",
                            "clip",
                            600,
                            500,
                            "easeOutQuart",
                            "${correct-txt}",
                            [50,300,50,0],
                            [0,300,50,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid37",
                            "top",
                            100,
                            200,
                            "linear",
                            "${answer2}",
                            '240px',
                            '250px'
                        ],
                        [
                            "eid219",
                            "top",
                            400,
                            200,
                            "linear",
                            "${answer4Copy2}",
                            '365px',
                            '400px'
                        ],
                        [
                            "eid23",
                            "opacity",
                            0,
                            200,
                            "linear",
                            "${answer1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            850,
                            250,
                            "linear",
                            "${answer1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid45",
                            "display",
                            600,
                            0,
                            "linear",
                            "${correct-txt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid202",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${promptCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid203",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${promptCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid220",
                            "opacity",
                            400,
                            200,
                            "linear",
                            "${answer4Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid221",
                            "opacity",
                            850,
                            250,
                            "linear",
                            "${answer4Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid25",
                            "opacity",
                            100,
                            200,
                            "linear",
                            "${answer2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${answer2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid38",
                            "top",
                            300,
                            200,
                            "linear",
                            "${answer4}",
                            '340px',
                            '350px'
                        ],
                        [
                            "eid58",
                            "opacity",
                            600,
                            500,
                            "linear",
                            "${correct-txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${correct-txt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid200",
                            "display",
                            250,
                            0,
                            "linear",
                            "${promptCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid201",
                            "display",
                            750,
                            0,
                            "linear",
                            "${promptCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2",
                            "scaleX",
                            0,
                            250,
                            "easeOutBack",
                            "${question}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid4",
                            "scaleY",
                            0,
                            250,
                            "easeOutBack",
                            "${question}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid6",
                            "opacity",
                            0,
                            250,
                            "easeOutBack",
                            "${question}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${question}",
                            '1',
                            '0'
                        ],
                        [
                            "eid24",
                            "opacity",
                            200,
                            200,
                            "linear",
                            "${answer3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            850,
                            250,
                            "linear",
                            "${answer3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid59",
                            "top",
                            600,
                            500,
                            "easeOutBack",
                            "${correct-txt}",
                            '440px',
                            '430px'
                        ],
                        [
                            "eid35",
                            "top",
                            0,
                            200,
                            "linear",
                            "${answer1}",
                            '190px',
                            '200px'
                        ]
                    ]
                }
            },
            "question3": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'center',
                            text: 'Select an answer to continue...',
                            font: ['Times New Roman, Times, serif', [20, ''], 'rgba(83,83,83,1)', '400', 'none', 'italic', '', ''],
                            display: 'none',
                            id: 'prompt',
                            rect: [0, 480, 699, '31px', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: '________ is a concept that refers to personal worth.',
                            tabindex: '1',
                            rect: [0, 57, 700, 200, 'auto', 'auto'],
                            id: 'question',
                            textStyle: ['', '', '40px', ''],
                            font: ['Times New Roman, Times, serif', [38, 'px'], 'rgba(83,83,83,1.00)', '700', 'none', 'italic', '', ''],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']],
                            textShadow: ['rgba(255,255,255,0.80)', '0px', '2px', '0px'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer1',
                            text: 'A. Shame',
                            cursor: 'pointer',
                            tabindex: '2',
                            rect: [100, 190, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer2',
                            text: 'B. Body image',
                            cursor: 'pointer',
                            tabindex: '3',
                            rect: [100, 240, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer3',
                            text: 'C. Self-esteem',
                            cursor: 'pointer',
                            tabindex: '4',
                            rect: [100, 290, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer4',
                            text: 'D. Guilt',
                            cursor: 'pointer',
                            tabindex: '5',
                            rect: [100, 340, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer4Copy3',
                            text: 'E. None of the above',
                            cursor: 'pointer',
                            tabindex: '5',
                            rect: [100, 365, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'correct-txt',
                            opacity: '0',
                            rect: [200, 440, 300, 50, 'auto', 'auto'],
                            font: ['Times New Roman, Times, serif', [36, 'px'], 'rgba(125,142,39,1.00)', '700', 'none', 'italic', '', ''],
                            textShadow: ['rgba(255,255,255,0.8)', 0, '1px', 0],
                            textStyle: ['', '', '40px', ''],
                            display: 'none',
                            align: 'center',
                            clip: 'rect(50px 300px 50px 0px)',
                            text: 'correct!'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 700, 480]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid36",
                            "top",
                            200,
                            200,
                            "linear",
                            "${answer3}",
                            '290px',
                            '300px'
                        ],
                        [
                            "eid206",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${prompt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid207",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${prompt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid223",
                            "opacity",
                            400,
                            200,
                            "linear",
                            "${answer4Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid224",
                            "opacity",
                            850,
                            250,
                            "linear",
                            "${answer4Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid26",
                            "opacity",
                            300,
                            200,
                            "linear",
                            "${answer4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid162",
                            "opacity",
                            850,
                            250,
                            "linear",
                            "${answer4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid56",
                            "clip",
                            600,
                            500,
                            "easeOutQuart",
                            "${correct-txt}",
                            [50,300,50,0],
                            [0,300,50,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid222",
                            "top",
                            400,
                            200,
                            "linear",
                            "${answer4Copy3}",
                            '365px',
                            '400px'
                        ],
                        [
                            "eid23",
                            "opacity",
                            0,
                            200,
                            "linear",
                            "${answer1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            850,
                            250,
                            "linear",
                            "${answer1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid45",
                            "display",
                            600,
                            0,
                            "linear",
                            "${correct-txt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6",
                            "opacity",
                            0,
                            250,
                            "easeOutBack",
                            "${question}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${question}",
                            '1',
                            '0'
                        ],
                        [
                            "eid25",
                            "opacity",
                            100,
                            200,
                            "linear",
                            "${answer2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "opacity",
                            850,
                            250,
                            "linear",
                            "${answer2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid38",
                            "top",
                            300,
                            200,
                            "linear",
                            "${answer4}",
                            '340px',
                            '350px'
                        ],
                        [
                            "eid58",
                            "opacity",
                            600,
                            500,
                            "linear",
                            "${correct-txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${correct-txt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2",
                            "scaleX",
                            0,
                            250,
                            "easeOutBack",
                            "${question}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid204",
                            "display",
                            250,
                            0,
                            "linear",
                            "${prompt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid205",
                            "display",
                            750,
                            0,
                            "linear",
                            "${prompt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4",
                            "scaleY",
                            0,
                            250,
                            "easeOutBack",
                            "${question}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            200,
                            200,
                            "linear",
                            "${answer3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${answer3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid37",
                            "top",
                            100,
                            200,
                            "linear",
                            "${answer2}",
                            '240px',
                            '250px'
                        ],
                        [
                            "eid59",
                            "top",
                            600,
                            500,
                            "easeOutBack",
                            "${correct-txt}",
                            '440px',
                            '430px'
                        ],
                        [
                            "eid35",
                            "top",
                            0,
                            200,
                            "linear",
                            "${answer1}",
                            '190px',
                            '200px'
                        ]
                    ]
                }
            },
            "question4": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'center',
                            text: 'Select an answer to continue...',
                            font: ['Times New Roman, Times, serif', [20, ''], 'rgba(83,83,83,1)', '400', 'none', 'italic', '', ''],
                            display: 'none',
                            id: 'prompt',
                            rect: [0, 480, 699, '31px', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: 'The decision-making model accounts for all of the following steps except for ________.',
                            tabindex: '1',
                            rect: [5, 64, 700, 200, 'auto', 'auto'],
                            id: 'question',
                            textStyle: ['', '', '40px', ''],
                            font: ['Times New Roman, Times, serif', [38, 'px'], 'rgba(83,83,83,1.00)', '700', 'none', 'italic', '', ''],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']],
                            textShadow: ['rgba(255,255,255,0.80)', '0px', '2px', '0px'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer1',
                            text: 'A. recognition',
                            cursor: 'pointer',
                            tabindex: '2',
                            rect: [100, 190, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer2',
                            text: 'B. evaluation',
                            cursor: 'pointer',
                            tabindex: '3',
                            rect: [100, 240, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer3',
                            text: 'C. implementation',
                            cursor: 'pointer',
                            tabindex: '4',
                            rect: [100, 290, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer4',
                            text: 'D. review',
                            cursor: 'pointer',
                            tabindex: '5',
                            rect: [100, 340, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer4Copy4',
                            text: 'E. expertise',
                            cursor: 'pointer',
                            tabindex: '5',
                            rect: [100, 365, 600, 50, 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic', '', ''],
                            userClass: 'answer',
                            align: 'left',
                            textStyle: ['', '', '40px', ''],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'correct-txt',
                            opacity: '0',
                            rect: [200, 440, 300, 50, 'auto', 'auto'],
                            font: ['Times New Roman, Times, serif', [36, 'px'], 'rgba(125,142,39,1.00)', '700', 'none', 'italic', '', ''],
                            textShadow: ['rgba(255,255,255,0.8)', 0, '1px', 0],
                            textStyle: ['', '', '40px', ''],
                            display: 'none',
                            align: 'center',
                            clip: 'rect(50px 300px 50px 0px)',
                            text: 'correct!'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 700, 480]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid36",
                            "top",
                            200,
                            200,
                            "linear",
                            "${answer3}",
                            '290px',
                            '300px'
                        ],
                        [
                            "eid210",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${prompt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid211",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${prompt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid26",
                            "opacity",
                            300,
                            200,
                            "linear",
                            "${answer4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid162",
                            "opacity",
                            850,
                            250,
                            "linear",
                            "${answer4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid56",
                            "clip",
                            600,
                            500,
                            "easeOutQuart",
                            "${correct-txt}",
                            [50,300,50,0],
                            [0,300,50,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid226",
                            "opacity",
                            400,
                            200,
                            "linear",
                            "${answer4Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid227",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${answer4Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid37",
                            "top",
                            100,
                            200,
                            "linear",
                            "${answer2}",
                            '240px',
                            '250px'
                        ],
                        [
                            "eid23",
                            "opacity",
                            0,
                            200,
                            "linear",
                            "${answer1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            850,
                            250,
                            "linear",
                            "${answer1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid45",
                            "display",
                            600,
                            0,
                            "linear",
                            "${correct-txt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6",
                            "opacity",
                            0,
                            250,
                            "easeOutBack",
                            "${question}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${question}",
                            '1',
                            '0'
                        ],
                        [
                            "eid25",
                            "opacity",
                            100,
                            200,
                            "linear",
                            "${answer2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "opacity",
                            850,
                            250,
                            "linear",
                            "${answer2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid38",
                            "top",
                            300,
                            200,
                            "linear",
                            "${answer4}",
                            '340px',
                            '350px'
                        ],
                        [
                            "eid208",
                            "display",
                            250,
                            0,
                            "linear",
                            "${prompt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid209",
                            "display",
                            750,
                            0,
                            "linear",
                            "${prompt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid24",
                            "opacity",
                            200,
                            200,
                            "linear",
                            "${answer3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            850,
                            250,
                            "linear",
                            "${answer3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid225",
                            "top",
                            400,
                            200,
                            "linear",
                            "${answer4Copy4}",
                            '365px',
                            '400px'
                        ],
                        [
                            "eid4",
                            "scaleY",
                            0,
                            250,
                            "easeOutBack",
                            "${question}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            600,
                            500,
                            "linear",
                            "${correct-txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${correct-txt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid59",
                            "top",
                            600,
                            500,
                            "easeOutBack",
                            "${correct-txt}",
                            '440px',
                            '430px'
                        ],
                        [
                            "eid2",
                            "scaleX",
                            0,
                            250,
                            "easeOutBack",
                            "${question}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid35",
                            "top",
                            0,
                            200,
                            "linear",
                            "${answer1}",
                            '190px',
                            '200px'
                        ]
                    ]
                }
            },
            "question5": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Times New Roman, Times, serif', [20, ''], 'rgba(83,83,83,1)', '400', 'none', 'italic'],
                            type: 'text',
                            display: 'none',
                            text: 'Select an answer to continue...',
                            align: 'center',
                            opacity: '0',
                            id: 'prompt',
                            rect: [0, 480, 699, '31px', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            id: 'question',
                            text: 'Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications:',
                            tabindex: '1',
                            font: ['Times New Roman, Times, serif', [38, 'px'], 'rgba(83,83,83,1.00)', '700', 'none', 'italic'],
                            align: 'left',
                            textStyle: [null, null, '40px'],
                            rect: [0, 0, 700, 200, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']],
                            textShadow: ['rgba(255,255,255,0.80)', '0px', '2px', '0px'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer1',
                            text: '1. Collaboratively administrate empowered markets',
                            cursor: 'pointer',
                            tabindex: '2',
                            rect: [100, 190, 600, 50, 'auto', 'auto'],
                            align: 'left',
                            userClass: 'answer',
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic'],
                            textStyle: [null, null, '40px'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer2',
                            text: '2. Completely synergize resource sucking relationships',
                            cursor: 'pointer',
                            tabindex: '3',
                            rect: [100, 240, 600, 50, 'auto', 'auto'],
                            align: 'left',
                            userClass: 'answer',
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic'],
                            textStyle: [null, null, '40px'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer3',
                            text: '3. Dramatically maintain clicks-and-mortar solutions',
                            cursor: 'pointer',
                            tabindex: '4',
                            rect: [100, 290, 600, 50, 'auto', 'auto'],
                            align: 'left',
                            userClass: 'answer',
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic'],
                            textStyle: [null, null, '40px'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'answer4',
                            text: '4. Proactively envisioned multimedia based expertise',
                            cursor: 'pointer',
                            tabindex: '5',
                            rect: [100, 340, 600, 50, 'auto', 'auto'],
                            align: 'left',
                            userClass: 'answer',
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(83,83,83,1.00)', '400', 'none', 'italic'],
                            textStyle: [null, null, '40px'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'correct-txt',
                            opacity: '0',
                            align: 'center',
                            font: ['Times New Roman, Times, serif', [36, 'px'], 'rgba(125,142,39,1.00)', '700', 'none', 'italic'],
                            clip: 'rect(50px 300px 50px 0px)',
                            textStyle: [null, null, '40px'],
                            display: 'none',
                            rect: [200, 440, 300, 50, 'auto', 'auto'],
                            textShadow: ['rgba(255,255,255,0.8)', 0, '1px', 0],
                            text: 'correct!'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 700, 480]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid36",
                            "top",
                            200,
                            200,
                            "linear",
                            "${answer3}",
                            '290px',
                            '300px'
                        ],
                        [
                            "eid214",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${prompt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid215",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${prompt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid26",
                            "opacity",
                            300,
                            200,
                            "linear",
                            "${answer4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid162",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${answer4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid56",
                            "clip",
                            500,
                            500,
                            "easeOutQuart",
                            "${correct-txt}",
                            [50,300,50,0],
                            [0,300,50,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid37",
                            "top",
                            100,
                            200,
                            "linear",
                            "${answer2}",
                            '240px',
                            '250px'
                        ],
                        [
                            "eid23",
                            "opacity",
                            0,
                            200,
                            "linear",
                            "${answer1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${answer1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid45",
                            "display",
                            500,
                            0,
                            "linear",
                            "${correct-txt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6",
                            "opacity",
                            0,
                            250,
                            "easeOutBack",
                            "${question}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${question}",
                            '1',
                            '0'
                        ],
                        [
                            "eid25",
                            "opacity",
                            100,
                            200,
                            "linear",
                            "${answer2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${answer2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid58",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${correct-txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${correct-txt}",
                            '1',
                            '0'
                        ],
                        [
                            "eid38",
                            "top",
                            300,
                            200,
                            "linear",
                            "${answer4}",
                            '340px',
                            '350px'
                        ],
                        [
                            "eid24",
                            "opacity",
                            200,
                            200,
                            "linear",
                            "${answer3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${answer3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4",
                            "scaleY",
                            0,
                            250,
                            "easeOutBack",
                            "${question}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid212",
                            "display",
                            250,
                            0,
                            "linear",
                            "${prompt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid213",
                            "display",
                            750,
                            0,
                            "linear",
                            "${prompt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2",
                            "scaleX",
                            0,
                            250,
                            "easeOutBack",
                            "${question}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid59",
                            "top",
                            500,
                            500,
                            "easeOutBack",
                            "${correct-txt}",
                            '440px',
                            '430px'
                        ],
                        [
                            "eid35",
                            "top",
                            0,
                            200,
                            "linear",
                            "${answer1}",
                            '190px',
                            '200px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("CHFD220_L1_2KnowledgeCheck_edgeActions.js");
})("EDGE-74783569");
