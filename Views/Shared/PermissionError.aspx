<%--<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Admin.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    错误页面
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

<div class="error_message">
    您没有权限处理该操作，请联系管理员！
</div>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="CenterTitleContent" runat="server">
    错误页面
</asp:Content>--%>

<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage" %>

<!DOCTYPE html>

<html>
<head id="Head1" runat="server">
    <meta name="viewport" content="width=device-width" />
    <title></title>
</head>
<body>
    <div>
        您没有查看此功能的权限！
    </div>
</body>
</html>
