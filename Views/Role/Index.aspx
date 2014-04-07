<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Admin.Master" Inherits="System.Web.Mvc.ViewPage<IEnumerable<LitchiServer.Role>>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    角色列表
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

<%
    %>
    <div style="width: 500px; margin: 0 auto;">
        <%:Html.ActionLink("添加角色", "Create", new { }, new { @class = "button green link_medium" }) %>
        <br />
        <br />
        <% Html.Telerik().Grid<Role>(Model)
        .Name("角色列表")
        .Columns(columns =>
        {
            columns.Bound(m => m.RoleId);
            columns.Bound(m => m.RoleName);
            columns.Template(m =>
            {%>
        <%:Html.ActionLink("修改", "Edit", new { id = m.RoleId }, new { @class = "button green indexlink_medium" })%>
        <%:Html.ActionLink("配置权限", "EditPermission", new { id = m.RoleId }, new { @class = "button green indexlink_medium" })%>
        <%:Html.ActionLink("删除", "Delete", new { id = m.RoleId }, new { @class = "button green indexlink_medium delete" })%>

        <%}).Title("管理");

        }).Pageable(pager => pager.PageSize(20)).Render();
                    
        %>
    </div>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="CenterTitleContent" runat="server">
    角色列表
</asp:Content>
