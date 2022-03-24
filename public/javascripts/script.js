// eslint-disable-next-line no-undef
$(document).ready(function () {
    // eslint-disable-next-line no-undef
    $("#sidebarCollapse").on("click", function () {
        // eslint-disable-next-line no-undef
        $("#sidebar").toggleClass("active");
    });

    // script untuk file dashboard
    // eslint-disable-next-line no-undef
    $("#topTable").DataTable( {
        "paging":   false,
        "ordering": true,
        "info":     false,
        "searching": false
    } );

    // eslint-disable-next-line no-undef
    $("#botTable").DataTable( {
        "paging":   false,
        "ordering": true,
        "info":     false,
        "searching": false
    } );

    // script untuk file add-new-car
    // eslint-disable-next-line no-undef
    $("#files").click(function () {
        // eslint-disable-next-line no-undef
        $("input[type='file']").trigger("click");
    });
    
    // eslint-disable-next-line no-undef
    $("input[type=\"file\"]").on("change", function() {
        // eslint-disable-next-line no-undef
        var val = $(this).val();
        // eslint-disable-next-line no-undef
        $(this).siblings("span").text(val);
    });
});
