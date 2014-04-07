<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Admin.Master" Inherits="System.Web.Mvc.ViewPage<IEnumerable<LitchiServer.UserViewModel>>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    用户列表
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <%
    %>
    <div style="width: 700px; margin: 0 auto;">
        <%:Html.ActionLink("添加用户", "Create", new { }, new { @class = "button green link_medium" }) %>
        <br />
        <br />
        <% Html.Telerik().Grid<LitchiServer.UserViewModel>(Model)
        .Name("用户列表")
        .Columns(columns =>
        {
            columns.Bound(m => m.User_ID);
            columns.Bound(m => m.User_Name);
            columns.Bound(m => m.Email);
            columns.Bound(m => m.Role_Name);
            columns.Template(m =>
            {%>
        <%:Html.ActionLink("修改信息", "Edit", new { id = m.User_ID }, new { @class = "button green indexlink_medium" })%>
        <%:Html.ActionLink("修改密码", "ResetPassword", new { id = m.User_ID }, new { @class = "button green indexlink_medium" })%>
        <%:Html.ActionLink("配置角色", "EditRole", new { id = m.User_ID }, new { @class = "button green indexlink_medium" })%>
        <%:Html.ActionLink("删除", "Delete", new { id = m.User_ID }, new { @class = "button green indexlink_medium delete" })%>

        <%}).Title("管理");

        }).Pageable(pager => pager.PageSize(20)).Render();
                    
        %>
    </div>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="CenterTitleContent" runat="server">
    用户列表
</asp:Content>
