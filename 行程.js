$(function() {
    $("#datepicker").datepicker({
        minDate: 0, // 只能選擇當天及以後的日期
        dateFormat: 'yy/mm/dd' // 按照年月日的順序顯示日期
    });

    var spots = {
        taipei: [
            { name: "101大樓", img: "https://api.housefeel.com.tw/wp-content/uploads/2021/10/230804%E5%8F%B0%E5%8C%97101-%E7%82%BA%E4%BB%80%E9%BA%BC%E5%8F%AF%E4%BB%A5%E8%93%8B%E9%80%99%E9%BA%BC%E9%AB%98%EF%BC%9F%E7%82%BA%E4%BB%80%E9%BA%BC%E5%B8%82%E4%B8%AD%E5%BF%83%E6%9C%89%E6%91%A9%E5%A4%A9%E5%A4%A7%E6%A8%93%EF%BC%9F%E5%8F%B0%E5%8C%97101%E8%88%88%E5%BB%BA%E6%95%85%E4%BA%8B%EF%BC%81.png", alt: "The peaks of High Tatras" },
            { name: "木柵動物園", img: "https://tripool-article-production.s3.ap-southeast-1.amazonaws.com/uploads/article/cover_image/121/%E5%8F%B0%E5%8C%97%E5%B8%82%E7%AB%8B%E5%8B%95%E7%89%A9%E5%9C%92__%E6%9C%A8%E6%9F%B5%E5%8B%95%E7%89%A9%E5%9C%92_.png", alt: "The chalet at the Green mountain lake" },
            { name: "士林夜市", img: "https://images.chinatimes.com/newsphoto/2020-11-13/1024/20201113004981.jpg", alt: "Shilin Night Market" },
            { name: "故宮博物院", img: "https://www.travel.taipei/image/221739/?r=1637566579522", alt: "National Palace Museum" },
            { name: "陽明山", img: "https://api.housefeel.com.tw/wp-content/uploads/2024/01/%E9%99%BD%E6%98%8E%E5%B1%B1%E8%8A%B1%E5%AD%A3-%E7%B6%B2%E7%AB%99%E7%B8%AE%E5%9C%96.png", alt: "Yangmingshan National Park" }
        ],
        taichung: [
            { name: "台中公園", img: "https://travel.taichung.gov.tw/Image/50424?r=637837893157956680", alt: "Planning the ascent" },
            { name: "逢甲夜市", img: "https://travel.taichung.gov.tw/Image/31585/?r=1675152421040", alt: "On top of Kozi kopka" },
            { name: "科學博物館", img: "https://travel.taichung.gov.tw/Image/31562?r=637837893159866678", alt: "National Museum of Natural Science" },
            { name: "高美濕地", img: "https://www.taichung.gov.tw/media/548202/%E4%B8%96%E7%95%8C%E9%A6%B3%E5%90%8D%E6%9C%80%E7%BE%8E%E5%A4%95%E9%99%BD-%E5%AE%89%E5%BF%83%E9%81%8A%E9%AB%98%E7%BE%8E%E6%BF%95%E5%9C%B0%E7%99%82%E7%99%92%E8%BA%AB%E5%BF%83%E9%9D%88.jpg", alt: "Gaomei Wetlands" },
            { name: "國家歌劇院", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/National_Taichung_Theater_aerial_view_2019.jpg/375px-National_Taichung_Theater_aerial_view_2019.jpg", alt: "National Taichung Theater" }
        ],
        kaohsiung: [
            { name: "愛河", img: "https://i0.wp.com/farm6.staticflickr.com/5590/14270428627_3dca7acb42_c.jpg?w=1100&quality=99&ssl=1", alt: "On top of Love River" },
            { name: "美麗島捷運站", img: "https://images.chinatimes.com/newsphoto/2020-07-28/1024/20200728003432.jpg", alt: "Formosa Boulevard MRT Station" },
            { name: "蓮池潭", img: "https://tripool-article-production.s3.ap-southeast-1.amazonaws.com/uploads/article/cover_image/101/Lotus_Pond__%E8%93%AE%E6%B1%A0%E6%BD%AD_-040.jpg", alt: "Lotus Pond" },
            { name: "西子灣", img: "https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_624_15.jpg&sizetype=3", alt: "Sizihwan Bay" },
            { name: "六合夜市", img: "https://cdn2.ettoday.net/images/3873/d3873357.jpg", alt: "Liuhe Night Market" }
        ]
    };

    // 清除行程表的函數
    function clearSchedule() {
        $('#first-day-morning, #first-day-afternoon, #first-day-evening, #first-day-night, #second-day-morning, #second-day-afternoon, #second-day-evening, #second-day-night, #third-day-morning, #third-day-afternoon, #third-day-evening, #third-day-night').empty();
    }

    // 對地點選擇下拉菜單變更的事件監聽器
    $('#locationSelect').change(function() {
        clearSchedule();
    });

    // 對地點選擇下拉菜單變更的事件監聽器
    $("#locationSelect").on("change", function() {
        var location = $(this).val();
        var gallery = $("#gallery");
        gallery.empty();

        if (location) {
            // 遍歷所選地點中的每個景點，並創建包含景點信息的列表項
            spots[location].forEach(function(spot) {
                var listItem = `
                    <li class="ui-widget-content ui-corner-tr m-3 shadow rounded p-3">
                        <h5 class="ui-widget-header">${spot.name}</h5>
                        <img src="${spot.img}" alt="${spot.alt}" width="96" height="72">
                        <br>
                        <a href="${spot.img}" title="查看較大的圖片" class="ui-icon ui-icon-zoomin">查看較大</a>
                        <a href="#" title="刪除此圖片" class="ui-icon ui-icon-trash">刪除圖片</a>
                    </li>`;
                gallery.append(listItem);
            });
            initializeDraggable(); // 初始化圖庫項目的可拖動功能
        }
    });
    

    // 初始化圖庫項目的可拖動功能的函數
    function initializeDraggable() {
        // 使列表項目可拖動
        $("li", "#gallery").draggable({
            cancel: "a.ui-icon",
            revert: "invalid",
            containment: "document",
            helper: "clone",
            cursor: "move"
        });

        var $trashAreas = $("#first-day-morning, #first-day-afternoon, #first-day-evening, #first-day-night, #second-day-morning, #second-day-afternoon, #second-day-evening, #second-day-night, #third-day-morning, #third-day-afternoon, #third-day-evening, #third-day-night");

        // 使區域可放置
        $trashAreas.droppable({
            accept: "#gallery > li",
            classes: {
                "ui-droppable-active": "ui-state-highlight"
            },
            // 處理將項目拖放到區域的情況
            drop: function(event, ui) {
                var $trash = $(this);
                var $existingItem = $trash.find("li");

                if ($existingItem.length) {
                    recycleImage($existingItem);
                }

                deleteImage(ui.draggable, $trash);
            }
        });

        // 顯示圖片的函數
        function deleteImage($item, $trash) {
            var recycle_icon = "<a href='#' title='回收此圖片' class='ui-icon ui-icon-refresh'>回收圖片</a>";
            $item.fadeOut(function() {
                $item.find("a.ui-icon-trash").remove();
                $item.append(recycle_icon).appendTo($trash).fadeIn();
            });
        }

        // 回收圖片的函數
        function recycleImage($item) {
            var trash_icon = "<a href='#' title='刪除此圖片' class='ui-icon ui-icon-trash'>刪除圖片</a>";
            $item.fadeOut(function() {
                $item.find("a.ui-icon-refresh").remove().end()
                    .append(trash_icon)
                    .appendTo("#gallery").fadeIn(function() {
                        $item.find('img').css('height', $item.data('original-height'));
                    });

                $item.draggable({
                    revert: true,
                    containment: "document",
                    cursor: "move",
                    helper: "original"
                });
            });
        }

        // 點擊圖庫項目的事件監聽器
        $("ul.gallery > li").on("click", function(event) {
            var $item = $(this),
                $target = $(event.target);

            if ($target.is("a.ui-icon-trash")) {
                deleteImage($item);
            } else if ($target.is("a.ui-icon-zoomin")) {
                viewLargerImage($target);
            } else if ($target.is("a.ui-icon-refresh")) {
                recycleImage($item);
            }
            return false;
        });

        // 查看較大圖片的函數
        function viewLargerImage($link) {
            var src = $link.attr("href"),
                title = $link.siblings("img").attr("alt"),
                $modal = $("img[src$='" + src + "']");

            if ($modal.length) {
                $modal.dialog("open");
            } else {
                var img = $("<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />")
                    .attr("src", src).appendTo("body");
                setTimeout(function() {
                    img.dialog({
                        title: title,
                        width: 40,
                        modal: true
                    });
                }, 1);
            }
        }
    }

    initializeDraggable(); // 初始化圖庫項目的可拖動功能

    // 導遊搜索按鈕點擊事件的監聽器
    const button = document.getElementById('findbtn');
    button.addEventListener('click', function() {
        window.location.href = '找導遊.html';
    });
    });

