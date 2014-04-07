<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<LitchiServer.Models.LoginModel>" %>

<!DOCTYPE html>

<html>
<head id="Head1" runat="server">
    <meta name="viewport" content="width=device-width" />
    <title>TYStudio-Web前端开发技术</title>
    <link type="text/css" rel="stylesheet" href="<%: Url.Content("~/Content/Login.css") %>" />
    <script src="<%: Url.Content("~/Scripts/lib/jquery-1.8.3.js") %>"></script>
    <script type="text/javascript" >
        function form_submit() {
            document.forms[0].submit();
        }
        function form_reset() {
            document.forms[0].reset();
        }

        $(document).keydown(function (event) {
            if (event.keyCode == 13) {
                document.forms[0].submit();
            }
        });
    </script>
</head>
<body>
    <% using (Html.BeginForm(new { ReturnUrl = ViewBag.ReturnUrl }))
       { %>
    <%: Html.AntiForgeryToken() %>
    <%: Html.ValidationSummary(true) %>

    <table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td bgcolor="#e5f6cf">&nbsp;</td>
        </tr>
        <tr>
            <td height="608" background="/Content/Images/green/login_03.gif">
                <table width="862" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td height="266" background="/Content/Images/green/login_04.gif">&nbsp;</td>
                    </tr>
                    <tr>
                        <td height="95">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td width="424" height="95" background="/Content/Images/green/login_06.gif">&nbsp;</td>
                                    <td width="183" background="/Content/Images/green/login_07.gif">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td width="21%" height="30">
                                                    <div align="center"><%:Html.LabelFor(m=>m.UserName) %></div>
                                                </td>
                                                <td width="79%" height="30">
                                                    <%:Html.TextBoxFor(m=>m.UserName) %></td>
                                            </tr>
                                            <tr>
                                                <td height="30">
                                                    <div align="center"><%: Html.LabelFor(m => m.Password) %></div>
                                                </td>
                                                <td height="30">
                                                    <%: Html.PasswordFor(m => m.Password) %></td>
                                            </tr>
                                            <tr>
                                                <td height="30">&nbsp;</td>
                                                <td height="30">
                                                    <img src="/Content/Images/green/dl.gif" width="81" height="22" border="0" usemap="#Map"></td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td width="255" background="/Content/Images/green/login_08.gif">&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td height="247" valign="top" background="/Content/Images/green/login_09.gif">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td width="22%" height="30">&nbsp;</td>
                                    <td width="56%">&nbsp;</td>
                                    <td width="22%">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td height="30">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td width="44%" height="20">&nbsp;</td>
                                                <td width="56%" class="STYLE4">版本 2013V1.0 </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#a2d962">&nbsp;</td>
        </tr>
    </table>
    <map name="Map">
        <area shape="rect" coords="3,3,36,19" href="javascript:form_submit();">
        <area shape="rect" coords="40,3,78,18" href="javascript:form_reset();">

    </map>
    <% } %>
</body>
</html>