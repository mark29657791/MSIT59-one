// 行程.js

// 日期選擇
$(function() {
  var dateFormat = "mm/dd/yy",
    from = $("#from")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on("change", function() {
        // 當 'from' 日期改變時，更新 'to' 的最小可選日期
        to.datepicker("option", "minDate", getDate(this));
      }),
    to = $("#to")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on("change", function() {
        // 當 'to' 日期改變時，更新 'from' 的最大可選日期
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
});

//拖動區塊
$(function() {

  // 定義 gallery 和 trash 元素
  var $gallery = $("#gallery"),
      $trash = $("#trash");

  // 讓 gallery 中的項目可以被拖動
  $("li", $gallery).draggable({
    cancel: "a.ui-icon", // 點擊圖標不會啟動拖動
    revert: "invalid", // 未被放置時，項目會回到初始位置
    containment: "document",
    helper: "clone",
    cursor: "move"
  });

  // 讓 trash 元素可以接受 gallery 中的項目
  $trash.droppable({
    accept: "#gallery > li",
    classes: {
      "ui-droppable-active": "ui-state-highlight"
    },
    drop: function(event, ui) {
      deleteImage(ui.draggable);
    }
  });

  // 讓 gallery 元素也可以接受來自 trash 的項目
  $gallery.droppable({
    accept: "#trash li",
    classes: {
      "ui-droppable-active": "custom-state-active"
    },
    drop: function(event, ui) {
      recycleImage(ui.draggable);
    }
  });

  // 定義刪除圖片的函數
  var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
  function deleteImage($item) {
    $item.fadeOut(function() {
      var $list = $("ul", $trash).length ?
        $("ul", $trash) :
        $("<ul class='gallery ui-helper-reset'/>").appendTo($trash);

      $item.find("a.ui-icon-trash").remove();
      $item.append(recycle_icon).appendTo($list).fadeIn(function() {
        $item
          .animate({ width: "48px" })
          .find("img")
            .animate({ height: "36px" });
      });
    });
  }

  // 定義回收圖片的函數
  var trash_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-trash'>Delete image</a>";
  function recycleImage($item) {
    $item.fadeOut(function() {
      $item
        .find("a.ui-icon-refresh")
          .remove()
        .end()
        .css("width", "96px")
        .append(trash_icon)
        .find("img")
          .css("height", "72px")
        .end()
        .appendTo($gallery)
        .fadeIn();
    });
  }

  // 定義預覽圖片的函數，展示用 ui.dialog 作為模態窗口
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
          width: 400,
          modal: true
        });
      }, 1);
    }
  }

  // 解決圖標行為與事件委派
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
});



