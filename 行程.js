$(function() {
  // 日期選擇
  var dateFormat = "yy/mm/dd",  // 修改日期格式为 年/月/日
    from = $("#from")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        minDate: 0,  // 设置最小日期为今天
        dateFormat: dateFormat  // 应用新的日期格式
      })
      .on("change", function() {
        to.datepicker("option", "minDate", getDate(this));
      }),
    to = $("#to")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        minDate: 0,  // 设置最小日期为今天
        dateFormat: dateFormat  // 应用新的日期格式
      })
      .on("change", function() {
        from.datepicker("option", "maxDate", getDate(this));
      });

function getDate(element) {
    var date;
    try {
        date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
        date = null;
    }
    return date;
}

    
// ------------------------------------------------------------------------------------------------------------------------------------------
  // 景點列表
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
    ],
  };

  // 根據選擇的地點更新景點列表
  $("#locationSelect").on("change", function() {
    // 當 #locationSelect 元素的值改變時執行以下程式碼
    var location = $(this).val(); // 取得 #locationSelect 元素的值
    var gallery = $("#gallery"); // 取得 id 為 gallery 的元素
    gallery.empty(); // 清空 gallery 元素的內容

    if (location) { // 如果 location 有值
        // 對於 spots[location] 中的每個 spot
        spots[location].forEach(function(spot) {
            // 建立一個 HTML 物件字串，包含 spot 的相關資訊
            var listItem = `
                <li class="ui-widget-content ui-corner-tr m-3 shadow rounded p-3">
                    <h5 class="ui-widget-header ">${spot.name}</h5>
                    <img src="${spot.img}" alt="${spot.alt}" width="96" height="72">
                    <br>
                    <a href="${spot.img}" title="View larger image" class="ui-icon ui-icon-zoomin">View larger</a>
                    <a href="#" title="Delete this image" class="ui-icon ui-icon-trash">Delete image</a>
                </li>`;
            // 將 listItem 加入到 gallery 元素中
            gallery.append(listItem);
        });
        // 初始化拖曳功能
        initializeDraggable();
    }
});


function initializeDraggable() {
  // 讓 #gallery 中的 li 元素可被拖曳
  $("li", "#gallery").draggable({
    cancel: "a.ui-icon", // 取消拖曳動作的元素
    revert: "invalid", // 拖曳後未放置到有效位置時返回原位
    containment: "document", // 限制拖曳範圍在整個文件中
    helper: "clone", // 拖曳時顯示的輔助元素
    cursor: "move" // 拖曳時的游標樣式
  });

  // 定義行程區域
  var $trashAreas = $("#trash-morning, #trash-afternoon, #trash-evening, #trash-night");

  // 設置區域可以放置的元素和相關動作
  $trashAreas.droppable({
    accept: "#gallery > li", // 只接受 #gallery 中的 li 元素
    classes: {
      "ui-droppable-active": "ui-state-highlight" // 拖曳時顯示的樣式
    },
    drop: function(event, ui) { // 放置元素時的動作
      var $trash = $(this);
      var $existingItem = $trash.find("li");

      // 如果垃圾桶已有圖片，先回收圖片
      if ($existingItem.length) {
        recycleImage($existingItem);
      }

      // 刪除被放置的圖片
      deleteImage(ui.draggable, $trash);
    }
  });

  // 刪除圖片的動作
  function deleteImage($item, $trash) {
    var recycle_icon = "<a href='#' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
    $item.fadeOut(function() {
      $item.find("a.ui-icon-trash").remove();
      $item.append(recycle_icon).appendTo($trash).fadeIn();
    });
  }
  
  // 回收圖片的動作
function recycleImage($item) {
    // 創建一個垃圾桶圖標的HTML代碼，並附加標題和class
    var trash_icon = "<a href='#' title='Delete this image' class='ui-icon ui-icon-trash'>Delete image</a>";

    // 將$item元素進行淡出效果，並在效果完成後執行回調函數
    $item.fadeOut(function() {
        // 在$item元素中查找帶有.ui-icon-refresh類的元素，並將其刪除，然後返回結果
        $item.find("a.ui-icon-refresh").remove().end()
            // 添加垃圾桶圖標
            .append(trash_icon)
            // 將元素附加到#gallery元素中，然後以淡入效果顯示元素
            .appendTo("#gallery").fadeIn(function() {
                // 還原原始尺寸
                // 將$item元素中的圖片元素的高度設置為保存的原始高度
                $item.find('img').css('height', $item.data('original-height'));
            });

        // 讓圖片可以被拖曳回到 #gallery
        $item.draggable({
            revert: true, // 拖曳後未放置到有效位置時返回原位
            containment: "document", // 限制拖曳範圍在整個文件中
            cursor: "move", // 拖曳時的游標樣式
            helper: "original" // 使用原始圖片作為拖曳輔助元素
        });
    });
}




  // 點擊圖片時的動作
  $("ul.gallery > li").on("click", function(event) {
    var $item = $(this),
      $target = $(event.target);

    // 判斷點擊的是哪個按鈕
    if ($target.is("a.ui-icon-trash")) { 
      deleteImage($item);
    } else if ($target.is("a.ui-icon-zoomin")) { // 放大按鈕
      viewLargerImage($target);
    } else if ($target.is("a.ui-icon-refresh")) { // 回收按鈕
      recycleImage($item);
    }
    return false;
  });

  // 放大圖片的動作
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


  // 初始加載時初始化拖動功能
  initializeDraggable();
});

// ------------------------------------------------------------------------------------------------------------------------------------------

const button = document.getElementById('findbtn');
button.addEventListener('click', function() {
  window.location.href = '找導遊.html';
});
