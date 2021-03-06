$(document).ready(function () {

    $('#saveDefaultsButton').click(function () {
        var anyQualArray = [];
        var bestQualArray = [];
        $('#anyQualities option:selected').each(function (i, d) {
            anyQualArray.push($(d).val());
        });
        $('#bestQualities option:selected').each(function (i, d) {
            bestQualArray.push($(d).val());
        });

        $.get(sbRoot + '/config/general/saveAddShowDefaults', {
            defaultStatus: $('#statusSelect').val(),
            anyQualities: anyQualArray.join(','),
            bestQualities: bestQualArray.join(','),
            defaultFlattenFolders: $('#flatten_folders').prop('checked'),
            subtitles: $('#subtitles').prop('checked'),
            anime: $('#anime').prop('checked'),
            scene: $('#scene').prop('checked'),
            audio_lang: $('#showLangSelect').val(),
        });

        $(this).attr('disabled', true);
        new PNotify({
            title: 'Saved Defaults',
            text: 'Your "add show" defaults have been set to your current selections.',
            shadow: false
        });
    });

    $('#statusSelect, #qualityPreset, #flatten_folders, #anyQualities, #bestQualities, #subtitles, #scene, #anime, #showLangSelect').change(function () {
        $('#saveDefaultsButton').attr('disabled', false);
    });

});