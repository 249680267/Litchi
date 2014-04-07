<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Admin.Master" Inherits="System.Web.Mvc.ViewPage<LitchiServer.Role>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    修改角色
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

<div class="center_content">

<% using (Html.BeginForm()) { %>

    <fieldset>
        <legend>Role</legend>

        <%: Html.HiddenFor(model => model.RoleId) %>

        <div class="editor-label">
            <%: Html.LabelFor(model => model.RoleName) %>
        </div>
        <div class="editor-field">
            <%: Html.EditorFor(model => model.RoleName) %>
        </div>

        <p>
            <input type="submit" value="保存" class="button green medium" /><%: Html.ActionLink("返回列表", "Index", new { }, new { @class = "button green link_medium" })%>
        </p>
    </fieldset>
<% } %>


</div>

</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="CenterTitleContent" runat="server">
    修改角色
</asp:Content>
