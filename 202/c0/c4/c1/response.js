var res = {'data':'HTTP/1.1 200 OK\x0aContent-Type: text/html; charset=utf-8\x0aContent-Length: 4812\x0aServer: Werkzeug/0.14.1 Python/3.6.5\x0aDate: Sun, 09 Dec 2018 01:28:16 GMT\x0a\x0a\x0a\x0a\x3chtml \x3chtml\x3e\x0a\x3chead\x3e\x0a    \x3cmeta http-equiv=\x22Content-Type\x22 content=\x22text/html; charset=UTF-8\x22\x3e\x3ctitle\x3eMy Bank\x3c/title\x3e\x0a\x0a    \x3cstyle type=\x22text/css\x22\x3e\x0a\x0aa.link_1  {font-size:10pt;\x0a               padding:0px;\x0a               font-family:arial,helvetica,sans-serif;\x0a               font-weight:normal;\x0a               text-decoration:none;\x0a               color:#993300;}\x0a\x0aa.link_1:hover {font-weight:normal;\x0a                text-decoration:underline;\x0a                background-color:#ffffff;\x0a                color:#ff0000;}\x0a\x0a\x0a.cldialog {font-size:10pt;\x0a               font-family:arial,helvetica,sans-serif;\x0a               font-weight:bold;\x0a               color:#993300;}\x0a\x0a\x0a.ctdialog {font-size:10pt;\x0a               padding-left:2px;\x0a               font-family:arial,helvetica,sans-serif;\x0a               font-weight:bold;\x0a               border-width:1px;\x0a               border-color:#993300;\x0a               color:#663300;}\x0a\x0a.csdialog {font-size:10pt;\x0a               font-family:arial,helvetica,sans-serif;\x0a               font-weight:bold;\x0a               border-left-width:1px;\x0a               border-top-width:1px;\x0a               border-right-width:1px;\x0a               border-bottom-width:1px;\x0a               border-color:#993300;\x0a               background-color:#993300;\x0a               color:#ffffff;}\x0a.csfocus {font-size:10pt;\x0a                 font-family:arial,helvetica,sans-serif;\x0a                 font-weight:bold;\x0a                 border-left-width:1px;\x0a                 border-top-width:1px;\x0a                 border-right-width:1px;\x0a                 border-bottom-width:1px;\x0a                 border-color:#ffff00;\x0a                 background-color:#444444;\x0a                 color:#ffff00;}\x0a\x0a.info_1 {font-size:8pt;\x0a                 font-family:arial,helvetica,sans-serif;\x0a                 font-weight:normal;\x0a                 color:#666666;}\x0a\x0a.err         {font-size:10pt;\x0a               padding-left:2px;\x0a               font-family:arial,helvetica,sans-serif;\x0a               font-weight:bold;\x0a               color:#ff0000;}\x0a\x0a\x0a\x0a\x0a\x3c/style\x3e\x0a\x0a\x0a\x0a\x0a\x0a\x3c/head\x3e\x0a\x3cbody bgcolor=\x22#ffffff\x22 leftmargin=\x2210\x22 topmargin=\x2210\x22 marginwidth=\x2210\x22 marginheight=\x2210\x22\x3e\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x3ctable width=\x22100%\x22 align=\x22center\x22 cellspacing=\x220\x22 cellpadding=\x220\x22 bgcolor=\x22#ffffff\x22 border=\x220\x22\x3e\x0a    \x3ctr\x3e\x0a        \x3ctd\x3e\x0a\x0a            \x3ctable width=\x2270%\x22 align=\x22center\x22 cellspacing=\x220\x22 cellpadding=\x224\x22 border=\x220\x22\x3e\x0a                \x3ctbody\x3e\x3ctr\x3e\x0a                    \x3ctd class=\x22err\x22 align=\x22center\x22 colspan=\x222\x22\x3e\x0a                        \x0a                    \x3c/td\x3e\x0a                \x3c/tr\x3e\x0a                \x3c/tbody\x3e\x0a            \x3c/table\x3e\x0a\x0a\x0a            \x3cform name=\x22form1\x22 action=\x22/login\x22 method=\x22POST\x22\x3e\x0a\x0a                \x3cinput type=\x22hidden\x22 name=\x22orgaccess\x22 value=\x22http\x22\x3e\x0a                \x3ctable align=\x22center\x22 cellspacing=\x220\x22 cellpadding=\x224\x22 border=\x220\x22\x3e\x0a                    \x3ctbody\x3e\x3ctr\x3e\x0a                        \x3ctd class=\x22cldialog\x22 align=\x22right\x22\x3e\x0a                            login:\x0a                        \x3c/td\x3e\x0a                        \x3ctd align=\x22left\x22\x3e \x3cinput class=\x22ctdialog\x22 type=\x22text\x22 size=\x2224\x22 id=\x22username\x22 tabindex=\x221\x22 name=\x22username\x22\x3e\x0a                        \x3c/td\x3e\x0a                    \x3c/tr\x3e\x0a                    \x3ctr\x3e\x0a                        \x3ctd class=\x22cldialog\x22 align=\x22right\x22\x3e\x0a                            password:\x0a                        \x3c/td\x3e\x0a                        \x3ctd align=\x22left\x22\x3e\x0a                            \x3cinput class=\x22ctdialog\x22 type=\x22password\x22 name=\x22password\x22 size=\x2224\x22 id=\x22password\x22 tabindex=\x222\x22\x3e\x0a                        \x3c/td\x3e\x0a                    \x3c/tr\x3e\x0a                    \x3ctr\x3e\x0a                        \x3ctd\x3e&nbsp;\x3c/td\x3e\x0a                        \x3ctd align=\x22left\x22\x3e\x0a\x0a                            \x3cinput class=\x22csdialog\x22 id=\x22button\x22 onblur=\x22this.className=&#39;csfocus&#39;\x22 onmouseover=\x22this.className=&#39;csfocus&#39;\x22 title=\x22Log In\x22 onfocus=\x22this.className=&#39;csfocus&#39;\x22 onclick=\x22handleSubmit(); return false;\x22 tabindex=\x223\x22 onmouseout=\x22this.className=&#39;csdialog&#39;\x22 type=\x22submit\x22 value=\x22     Log In     \x22 name=\x22Button2\x22\x3e\x0a                        \x3c/td\x3e\x0a                    \x3c/tr\x3e\x0a                    \x3c/tbody\x3e\x3c/table\x3e\x0a            \x3c/form\x3e\x0a\x0a\x0a            \x3cdiv align=\x22center\x22\x3e\x0a\x0a              \x0a            \x3c/div\x3e \x0a\x0a            \x3ctable align=\x22center\x22\x3e\x0a    \x0a                \x3ctd align=\x22left\x22\x3e\x0a            \x0a                    \x3ca href=\x22/register\x22 class=\x22csdialog\x22 id=\x22button-register\x22 onblur=\x22this.className=&#39;csfocus&#39;\x22 onmouseover=\x22this.className=&#39;csfocus&#39;\x22 title=\x22Register\x22 onfocus=\x22this.className=&#39;csfocus&#39;\x22tabindex=\x223\x22  onmouseout=\x22this.className=&#39;csdialog&#39;\x22 name=\x22Button2\x22\x3eRegister\x3c/button\x3e\x0a                \x3c/td\x3e\x0a                \x3ctd\x3e\x0a                    \x3cbutton type=\x22button\x22 onclick=\x22location.href=\x27/reset\x27;\x22\x3ereset passord\x3c/button\x3e\x0a                \x3c/td\x3e\x0a\x0a                \x3c/tbody\x3e\x3c/table\x3e\x0a        \x3c/td\x3e\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e\x0a\x0a\x3c/body\x3e\x3c/html\x3e'}