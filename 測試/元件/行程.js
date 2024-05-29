$(function () {
    $("#datepicker").datepicker({
        minDate: 0, // 只能選擇當天及以後的日期
        dateFormat: 'yy/mm/dd' // 按照年月日的順序顯示日期
    });

    var spots = { /* 你的景點資料 */ };

    function clearSchedule() {
        $('#first-day-morning, #first-day-afternoon, #first-day-evening, #first-day-night, #second-day-morning, #second-day-afternoon, #second-day-evening, #second-day-night, #third-day-morning, #third-day-afternoon, #third-day-evening, #third-day-night').empty();
    }

    function initializeDraggable() {
        $("li", "#gallery").draggable({
            cancel: "a.ui-icon",
            revert: "invalid",
            containment: "document",
            helper: "clone",
            cursor: "move"
        });

        $("#gallery").droppable({
            accept: ".ui-draggable",
            classes: {
                "ui-droppable-active": "ui-state-highlight"
            },
            drop: function (event, ui) {
                recycleImage(ui.draggable);
            }
        });

        var $trashAreas = $("#first-day-morning, #first-day-afternoon, #first-day-evening, #first-day-night, #second-day-morning, #second-day-afternoon, #second-day-evening, #second-day-night, #third-day-morning, #third-day-afternoon, #third-day-evening, #third-day-night");
        var dropAreasStatus = {};
        var requiredAreas = [];

        function updateRequiredAreas() {
            var days = parseInt($("#days").val());
            requiredAreas = [];

            if (days >= 1) {
                requiredAreas.push("#first-day-morning", "#first-day-afternoon", "#first-day-evening", "#first-day-night");
            }
            if (days >= 2) {
                requiredAreas.push("#second-day-morning", "#second-day-afternoon", "#second-day-evening", "#second-day-night");
            }
            if (days >= 3) {
                requiredAreas.push("#third-day-morning", "#third-day-afternoon", "#third-day-evening", "#third-day-night");
            }
        }

        function checkAllRequiredAreasFilled() {
            for (var i = 0; i < requiredAreas.length; i++) {
                if (!dropAreasStatus[requiredAreas[i]]) {
                    return false;
                }
            }
            return true;
        }

        $trashAreas.each(function () {
            dropAreasStatus[this.id] = false;
        });

        $trashAreas.droppable({
            accept: "#gallery > li",
            classes: {
                "ui-droppable-active": "ui-state-highlight"
            },
            drop: function (event, ui) {
                var $trash = $(this);
                var $existingItem = $trash.find("li");

                if ($existingItem.length) {
                    recycleImage($existingItem);
                }

                deleteImage(ui.draggable, $trash);

                dropAreasStatus[$trash.attr("id")] = true;

                if (checkAllRequiredAreasFilled()) {
                    $("#confirmCheckbox").prop("disabled", false);
                }
            }
        });

        $("#days").change(function () {
            clearSchedule();
            updateRequiredAreas();
            $("#confirmCheckbox").prop("disabled", true);

            $trashAreas.each(function () {
                dropAreasStatus[this.id] = false;
            });
        });

        function deleteImage($item, $trash) {
            var recycle_icon = "<a href='#' title='回收此圖片' class='ui-icon ui-icon-refresh'>回收圖片</a>";
            $item.fadeOut(function () {
                $item.find("a.ui-icon-arrowrefresh-1-s").remove();
                $item.append(recycle_icon).appendTo($trash).fadeIn();

                $item.find(".ui-icon-refresh").on("click", function () {
                    recycleImage($item);
                });
            });
        }

        function recycleImage($item) {
            var trash_icon = "<a href='#' title='刪除此圖片' class='ui-icon ui-icon-arrowrefresh-1-s'>刪除圖片</a>";
            $item.fadeOut(function () {
                $item.find("a.ui-icon-refresh").remove().end()
                    .append(trash_icon)
                    .appendTo("#gallery").fadeIn(function () {
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
    }

    $("#locationSelect").on("change", function () {
        var location = $(this).val();
        var gallery = $("#gallery");
        gallery.empty();

        if (location) {
            spots[location].forEach(spot => {
                var listItem = `
                    <li class="ui-widget-content ui-corner-tr">
                        <h5 class="ui-widget-header">${spot.name}</h5>
                        <img src="${spot.img}" alt="${spot.alt}" width="96" height="72">
                        <br>
                        <a href="${spot.img}" title="查看較大的圖片" class="ui-icon ui-icon-zoomin">查看較大</a>
                    </li>`;
                gallery.append(listItem);
            });
            initializeDraggable();
        }
    });

    $('#locationSelect').change(clearSchedule);

    $("li").draggable({
        cancel: "a.ui-icon",
        revert: "invalid",
        containment: "document",
        helper: "clone",
        cursor: "move"
    });

    initializeDraggable();
});
