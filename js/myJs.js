const app = angular.module('myApp', []);
app.controller("myCtrl", function($scope){

    var url = window.location.href;

    if(url.indexOf("language=zh") > -1){
        $scope.language = "Chinese";
    } else {
        $scope.language = "English";
    }

    $scope.allTexts = {
        "Chinese":{
            "pageFloder":"page",
            "title":"快速制作属于自己的图标包",
            "description":"本页面将详细介绍本工具的使用方式，无论你完全不会或者不熟悉该工具又或者不了解工具的高级用法，都可以在本页面找到答案。",
            "menu":[
                {
                    "title":"一、创建图标包，生成你的第一个图标包",
                    "id":"section-one"
                },
                {
                    "title":"二、闪电适配，自定义打包信息",
                    "id":"section-two"
                },
                {
                    "title":"三、个性化设置与自定义页面",
                    "id":"section-three"
                },
                {
                    "title":"四、自定义遮罩详解",
                    "id":"section-four"
                },
                {
                    "title":"五、动态日历与一加动态图标",
                    "id":"section-five"
                },
                {
                    "title":"六、备份、导入、快速制作第二套图标包",
                    "id":"section-six"
                },
                {
                    "title":"七、模板介绍、更换自定义模板",
                    "id":"section-seven"
                }
            ],
            "appLinkText":"获取最新版《做你的图标包》",
            "appLink":"https://www.coolapk.com/apk/cn.ommiao.iconpackcreator",
            "dynamicParams":[
                {
                    "paramName":"enable",
                    "paramDesc":"是否开启文字，取值为true或false，仅动态天气有此属性"
                },
                {
                    "paramName":"alignX",
                    "paramDesc":"横向的相对位置，可选择left、center、right"
                },
                {
                    "paramName":"alignY",
                    "paramDesc":"纵向的相对位置，可选择top、center、bottom"
                },
                {
                    "paramName":"color",
                    "paramDesc":"文字颜色，可以使用简单的颜色单词如red，white，black，也可以使用精确的颜色代码如#333333"
                },
                {
                    "paramName":"font",
                    "paramDesc":"字体，这个我也不知道都支持哪些，请自行测试"
                },
                {
                    "paramName":"font_typeface",
                    "paramDesc":"字体样式，如粗体是BOLD，其他可能支持常规NORMAL，斜体ITALIC等，具体请自行测试"
                },
                {
                    "paramName":"offsetX",
                    "paramDesc":"横向位置的偏移值，正值向右、负值向左，如1dp为向右偏移1个dp宽度，开发者选项的最小屏幕宽度的数值就是整个屏幕宽度的dp值，如果alignX设置为居中则offsetX属性可能无效"
                },
                {
                    "paramName":"offsetY",
                    "paramDesc":"纵向位置的偏移值，正值向下、负值向上，如1dp为向下偏移1个dp宽度，如果alignY设置为居中则offsetY属性可能无效"
                },
                {
                    "paramName":"shadowLayerAlpha",
                    "paramDesc":"文字阴影的透明度，浮点型数据，如0.1f，0.2f"
                },
                {
                    "paramName":"shadowLayerColor",
                    "paramDesc":"文字阴影的颜色，取值与color属性一致"
                },
                {
                    "paramName":"shadowLayerRadius",
                    "paramDesc":"文字阴影的模糊半径，数值越大阴影会越模糊，请自行测试"
                },
                {
                    "paramName":"shadowLayerX",
                    "paramDesc":"文字阴影位置的横向偏移值，如1px为向右偏移1个像素，负值则向左"
                },
                {
                    "paramName":"shadowLayerY",
                    "paramDesc":"文字阴影位置的纵向偏移值，如1px为向下偏移1个像素，负值则向上"
                },
                {
                    "paramName":"textSize",
                    "paramDesc":"文字大小，如20dp"
                }
            ]
        },
        "English":{
            "pageFloder":"pageEn",
            "title":"Create your icon pack quickly",
            "description":"You can learn most tips about how to use this icon pack creator",
            "menu":[
                {
                    "title":"1. Create an icon pack and export your first icon pack",
                    "id":"section-one"
                },
                {
                    "title":"2. Lightning adaptation, custom packaging information",
                    "id":"section-two"
                },
                {
                    "title":"3. Custom settings and custom page",
                    "id":"section-three"
                },
                {
                    "title":"4. Detailed explanation of icon mask",
                    "id":"section-four"
                },
                {
                    "title":"5. Dynamic calendar and oneplus dynamic icons",
                    "id":"section-five"
                },
                {
                    "title":"6. Backup, restore, and quickly create your another icon pack",
                    "id":"section-six"
                },
                {
                    "title":"7. How to install multiple icon packs in the same time",
                    "id":"section-seven"
                }
            ],
            "appLinkText":"Get the latest version of 'Icon pack creator'",
            "appLink":"https://play.google.com/store/apps/details?id=cn.ommiao.iconpackcreator",
            "dynamicParams":[
                {
                    "paramName":"enable",
                    "paramDesc":"Whether to enable the text, the value is true or false, only dynamic weather has this attribute"
                },
                {
                    "paramName":"alignX",
                    "paramDesc":"Horizontal relative position, can choose left, center, right"
                },
                {
                    "paramName":"alignY",
                    "paramDesc":"Vertical relative position, can choose top, center, bottom"
                },
                {
                    "paramName":"color",
                    "paramDesc":"Text color, you can use simple color words such as red, white, black, or you can use precise color codes such as # 333333"
                },
                {
                    "paramName":"font",
                    "paramDesc":"Text font, I don't know which ones are supported, please test it yourself"
                },
                {
                    "paramName":"font_typeface",
                    "paramDesc":"The font style, such as bold is BOLD, others may support conventional NORMAL, italic ITALIC, etc. Please test by yourself"
                },
                {
                    "paramName":"offsetX",
                    "paramDesc":"The offset value of the horizontal position. The positive value is to the right and the negative value is to the left. For example, 1dp is offset to the right by 1 dp width. The minimum screen width value of the developer option is the dp value of the entire screen width. If alignX is set to center, the offsetX property may be invalid"
                },
                {
                    "paramName":"offsetY",
                    "paramDesc":"The offset value of the vertical position. The positive value is downward and the negative value is upward. For example, 1dp is offset downward by 1 dp width. If alignY is set to center, the offsetY property may be invalid"
                },
                {
                    "paramName":"shadowLayerAlpha",
                    "paramDesc":"The transparency of the text shadow, floating point data, such as 0.1f, 0.2f.1f，0.2f"
                },
                {
                    "paramName":"shadowLayerColor",
                    "paramDesc":"The color of the text shadow, the value format is consistent with the color property"
                },
                {
                    "paramName":"shadowLayerRadius",
                    "paramDesc":"The blur radius of the text shadow. The larger the value, the more blurred the shadow. Please test by yourself"
                },
                {
                    "paramName":"shadowLayerX",
                    "paramDesc":"The horizontal offset value of the shadow position of the text, for example, 1px is offset by 1 pixel to the right, and negative values ​​are to the left"
                },
                {
                    "paramName":"shadowLayerY",
                    "paramDesc":"The vertical offset value of the shadow position of the text, for example, 1px is offset by 1 pixel downward, and negative values ​​are upward"
                },
                {
                    "paramName":"textSize",
                    "paramDesc":"Text size, such as 20dp"
                }
            ]
        }
    };

    $scope.changeLanguage = function(){
        if($scope.language == "English"){
            $scope.language = "Chinese";
        } else {
            $scope.language = "English";
        }
    }
});