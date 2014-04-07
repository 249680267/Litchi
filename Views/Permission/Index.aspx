<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Admin.Master" Inherits="System.Web.Mvc.ViewPage<IEnumerable<LitchiServer.Permission>>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    权限列表
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

<%
    %>
    <div style="width: 500px; margin: 0 auto;">
        <%:Html.ActionLink("添加权限", "Create", new { }, new { @class = "button green link_medium" }) %>
        <br />
        <br />
        <% Html.Telerik().Grid<Permission>(Model)
        .Name("权限列表")
        .Columns(columns =>
        {
            columns.Bound(m => m.PermissionId);
            columns.Bound(m => m.PermissionName);
            columns.Template(m =>
            {%><%:Html.ActionLink("修改", "Edit", new { id = m.PermissionId }, new { @class = "button green indexlink_medium" })%>
        <%:Html.ActionLink("删除", "Delete", new { id = m.PermissionId }, new { @class = "button green indexlink_medium delete" })%>

        <%}).Title("管理");

        }).Pageable(pager => pager.PageSize(20)).Render();
                    
        %>
    </div>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="CenterTitleContent" runat="server">
    权限列表
</asp:Content>
