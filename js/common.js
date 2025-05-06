let global_data =
{
    query: null,
    args_menu: null 
};

$(window).on('load', function()
{
    let query = location.search;
    let query_divide = query.split('#');
    if(query_divide[0] === '')
    {
        return;
    }
    global_data.query = query;
    let args = query_divide[0].split('=');
    global_data.args_menu = args[1];
    $('.menu').animate({scrollTop: global_data.args_menu});
});

$(function()
{
    //--------------------------------------------------------------------------
    // キャッシュ対応
    //--------------------------------------------------------------------------

    $('script').each(function(index, element) {
        const src = $(element).attr('src');
        $(element).attr('src', src + '?' + new Date().getTime());
    });

    $('link').each(function(index, element) {
        const rel = $(element).attr('rel');
        if(rel !== 'icon')
        {
            const src = $(element).attr('href');
            $(element).attr('href', src + '?' + new Date().getTime());
        }
    });

    $(document).on('click', 'h3.menu-page-title-link', function()
    {
        let pos_this = $(this).position().top;
        let pos_cur = $('h3.menu-page-title').position().top;

        let minus = 0;
        // let minus = 4;
        if((pos_this - pos_cur) > 0)
        {
            let next = $('h3.menu-page-title').next('ul');
            let cnt = 0;
            for(; typeof(next.html()) !== 'undefined'; cnt++)
            {
                next = next.next('ul');
            }
            minus += cnt * 40 + 4 * 2;
        }

        let pos = $('.menu').scrollTop();
        pos += pos_this;
        pos -= minus;

        let url = $(this).find('a').attr('href');
        url += `?menu=${pos}`;

        location.href = url;

        return false;
    });

    $(document).on('click', 'div.menu-text li a', function()
    {
        let url = $(this).prop('href');
        let anchor = url.split('#');
        let query = '';
        if(global_data.query !== null)
        {
            query = global_data.query;
        }
        location.href = query + `#${anchor[1]}`;
        return false;
    });

    changeColor();

    gifPlayer();

    function changeColor()
    {
        let replacement_for_command =
        {
            '&gt; (copy)': '&gt; <font class="pre-yellow">$1</font>'
            , '&gt; (cp)': '&gt; <font class="pre-yellow">$1</font>'
            , '&gt; (php)': '&gt; <font class="pre-yellow">$1</font>'
            , '&gt; (composer)': '&gt; <font class="pre-yellow">$1</font>'
            , '(wsserver)': '<font class="pre-yellow">$1</font>'
            , '([0-9]+[\\.][0-9]+[\\.][0-9]+[\\s])': '<font class="pre-green">$1</font>'
            , '(Usage:[\\s])': '<font class="pre-yellow">$1</font>'
            , '( app[\\s])': '<font class="pre-yellow">$1</font>'
            , '([\\s]( main)[\\s])': '<font class="pre-yellow">$1</font>'
            , '(  app:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '( craft[\\s])': '<font class="pre-yellow">$1</font>'
            , '(  craft:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '( laravel[\\s])': '<font class="pre-yellow">$1</font>'
            , '(  laravel:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '(  Empty\\.\\.\\.[\\s])': '<font class="pre-blue">$1</font>'
            , '(\\[success\\])': '<font class="pre-green">$1</font>'
            , '(\\([a-zA-Z]+\\))': '<font class="pre-yellow">$1</font>'
            , '(Options:[\\s])': '<font class="pre-yellow">$1</font>'
            , '(-h, \\-\\-help)': '<font class="pre-green">$1</font>'
            , '(-q, \\-\\-quiet)': '<font class="pre-green">$1</font>'
            , '(-V, \\-\\-version)': '<font class="pre-green">$1</font>'
            , '(-\\-ansi\\|\\-\\-no\\-ansi)': '<font class="pre-green">$1</font>'
            , '(-n, \\-\\-no\\-interaction)': '<font class="pre-green">$1</font>'
            , '(-\\-env\\[=ENV\\])': '<font class="pre-green">$1</font>'
            , '(-v\\|vv\\|vvv, \\-\\-verbose)': '<font class="pre-green">$1</font>'
            , '(Available commands:[\\s])': '<font class="pre-yellow">$1</font>'
            , '(  about)': '<font class="pre-green">$1</font>'
            , '(  clear\\-compiled)': '<font class="pre-green">$1</font>'
            , '(  completion)': '<font class="pre-green">$1</font>'
            , '(  db )': '<font class="pre-green">$1</font>'
            , '(  docs)': '<font class="pre-green">$1</font>'
            , '(  down)': '<font class="pre-green">$1</font>'
            , '(  env )': '<font class="pre-green">$1</font>'
            , '(  help)': '<font class="pre-green">$1</font>'
            , '(  inspire)': '<font class="pre-green">$1</font>'
            , '(  list)': '<font class="pre-green">$1</font>'
            , '(  migrate )': '<font class="pre-green">$1</font>'
            , '(  optimize )': '<font class="pre-green">$1</font>'
            , '(  serve)': '<font class="pre-green">$1</font>'
            , '(  test)': '<font class="pre-green">$1</font>'
            , '(  tinker)': '<font class="pre-green">$1</font>'
            , '(  up)': '<font class="pre-green">$1</font>'
            , '([\\n] auth[\\n])': '<font class="pre-yellow">$1</font>'
            , '(auth:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] cache[\\n])': '<font class="pre-yellow">$1</font>'
            , '(cache:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] channel[\\n])': '<font class="pre-yellow">$1</font>'
            , '(channel:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] config[\\n])': '<font class="pre-yellow">$1</font>'
            , '(config:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] db[\\n])': '<font class="pre-yellow">$1</font>'
            , '(db:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] env[\\n])': '<font class="pre-yellow">$1</font>'
            , '(env:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] event[\\n])': '<font class="pre-yellow">$1</font>'
            , '(event:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] key[\\n])': '<font class="pre-yellow">$1</font>'
            , '(key:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] lang[\\n])': '<font class="pre-yellow">$1</font>'
            , '(lang:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] make[\\n])': '<font class="pre-yellow">$1</font>'
            , '(make:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] migrate[\\n])': '<font class="pre-yellow">$1</font>'
            , '(migrate:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] model[\\n])': '<font class="pre-yellow">$1</font>'
            , '(model:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] notifications[\\n])': '<font class="pre-yellow">$1</font>'
            , '(notifications:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] optimize[\\n])': '<font class="pre-yellow">$1</font>'
            , '(optimize:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] package[\\n])': '<font class="pre-yellow">$1</font>'
            , '(package:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] queue[\\n])': '<font class="pre-yellow">$1</font>'
            , '(queue:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] route[\\n])': '<font class="pre-yellow">$1</font>'
            , '(route:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] sail[\\n])': '<font class="pre-yellow">$1</font>'
            , '(sail:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] sanctum[\\n])': '<font class="pre-yellow">$1</font>'
            , '(sanctum:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] schedule[\\n])': '<font class="pre-yellow">$1</font>'
            , '(schedule:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] schema[\\n])': '<font class="pre-yellow">$1</font>'
            , '(schema:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] session[\\n])': '<font class="pre-yellow">$1</font>'
            , '(session:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] storage[\\n])': '<font class="pre-yellow">$1</font>'
            , '(storage:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] stub[\\n])': '<font class="pre-yellow">$1</font>'
            , '(stub:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] vendor[\\n])': '<font class="pre-yellow">$1</font>'
            , '(vendor:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '([\\n] view[\\n])': '<font class="pre-yellow">$1</font>'
            , '(view:[a-z-]+)': '<font class="pre-green">$1</font>'
            , '(netstat)': '<font class="pre-yellow">$1</font>'
            , '(Select-String)': '<font class="pre-yellow">$1</font>'
        };

        let replacement_for_php =
        {
            'class ': '<font class="pre-type">class </font>'
            , 'implements': '<font class="pre-type">implements</font>'
            , '(namespace)': '<font class="pre-type">$1</font>'
            , '(new)': '<font class="pre-type">$1</font>'
            , ' (extends) ': ' <font class="pre-type">$1</font> '
            , 'public': '<font class="pre-type">public</font>'
            , '(protected) ': '<font class="pre-type">$1</font> '
            , ' (function)': ' <font class="pre-type">$1</font>'
            , '(const) ': '<font class="pre-type">$1</font> '
            , ' (self)': ' <font class="pre-type">$1</font>'
            , 'static': '<font class="pre-type">static</font>'
            , '([^_])(array)': '$1<font class="pre-type">$2</font>'
            , '\\((string) ': '(<font class="pre-type">$1</font> '
            , ' (string)': ' <font class="pre-type">$1</font>'
            , ' \\?(string)': ' ?<font class="pre-type">$1</font>'
            , ' (int) ': ' <font class="pre-type">$1</font> '
            , ' (bool) ': ' <font class="pre-type">$1</font> '
            , ' (float) ': ' <font class="pre-type">$1</font> '
            , ' (object) ': ' <font class="pre-type">$1</font> '
            , ' (mixed) ': ' <font class="pre-type">$1</font> '
            , ' (callable) ': ' <font class="pre-type">$1</font> '
            , 'enum': '<font class="pre-type">enum</font>'
            , ' (let) ': ' <font class="pre-type">$1</font> '
            , '(\\$this)': '<font class="pre-type">$1</font>'
            , '@var': '<font class="pre-type">@var</font>'
            , '@param': '<font class="pre-type">@param</font>'
            , '@return': '<font class="pre-type">@return</font>'
            , '@see': '<font class="pre-type">@see</font>'
            , '@license': '<font class="pre-type">@license</font>'
            , '@author': '<font class="pre-type">@author</font>'
            , '@copyright': '<font class="pre-type">@copyright</font>'
            , '@property': '<font class="pre-type">@property</font>'
            , '@method': '<font class="pre-type">@method</font>'
            , '@since': '<font class="pre-type">@since</font>'
            , '@throws': '<font class="pre-type">@throws</font>'
            , '@link': '<font class="pre-type">@link</font>'
            , ' ([^@]return)': ' <font class="pre-pink">$1</font>'
            , ' (if)\\(': ' <font class="pre-pink">$1</font>('
            , 'else': '<font class="pre-pink">else</font>'
            , 'switch': '<font class="pre-pink">switch</font>'
            , ' (case) ': ' <font class="pre-type">$1</font> '
            , 'default': '<font class="pre-pink">default</font>'
            , '(while)\\(': '<font class="pre-pink">$1</font>('
            , '(\\/\\*[\\s\\S]*?\\*\\/)': '<font class="pre-green">$1</font>'
            , '(\\/\\/.*)': '<font class="pre-green">$1</font>'
            , 'void': '<font class="pre-type">void</font>'
            , ' (null)': ' <font class="pre-type">$1</font>'
        };

        $('pre[color-change="command"]').each(function($obj)
        {
            let str = $(this).html();
            for(let key in replacement_for_command)
            {
                let rep = new RegExp(key, 'g');
                str = str.replace(rep, replacement_for_command[key]);
            }
            $(this).html(str);
        });

        $('pre[color-change="php"]').each(function($obj)
        {
            let str = $(this).html();
            for(let key in replacement_for_php)
            {
                let rep = new RegExp(key, 'g');
                str = str.replace(rep, replacement_for_php[key]);
            }
            $(this).html(str);
        });
    }

    function gifPlayer()
    {
        $('img.img-player').each(function()
        {
            let height = $(this).prop('height');;
            let width = $(this).prop('width');;
            $(this).prop('src', `./img/common/filter-${width}x${height}.png`);
            let png = $(this).attr('img-player-image');
            $(this).css('background-image', `url("${png}")`);
            $(this).attr('status', 'stop');
        });

        $(document).on('click', 'img.img-player', function()
        {
            let status = $(this).attr('status');
            if(status === 'stop')
            {
                $(this).prop('src', './img/common/loading.svg');
                $(this).attr('status', 'play');

                setTimeout(() => {
                    let gif = $(this).attr('img-player-movie');
                    $(this).prop('src', gif);
                }
                , 2000
                );
            }
            else
            {
                let height = $(this).prop('height');
                let width = $(this).prop('width');
                $(this).prop('src', `./img/common/filter-${width}x${height}.png`);
                $(this).attr('status', 'stop');
            }
        });
    }
});
