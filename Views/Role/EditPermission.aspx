<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Admin.Master" Inherits="System.Web.Mvc.ViewPage<LitchiServer.Role>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    配置权限
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="center_content">
        <fieldset>
            <legend>Role</legend>

            <%: Html.HiddenFor(model => model.RoleId, new { @id="hfRoleId" })%>

            <div class="editor-label">
                <%: Html.LabelFor(model => model.RoleName) %>
            </div>
            <div class="editor-field">
                <%: Html.TextBoxFor(model => model.RoleName, new { @readonly = true})%>
            </div>

            <div class="editor-label" style="width: 100%">
                选择权限<div id="updateMessage" class="float_right" ></div>
            </div>
            <div class="clear_both"></div>
            <div class="editor-field" id="permissionCheck">
                <%= Html.CheckBoxList("permissions", ViewData["PermissionSelectList"] as List<SelectListItem>) %>
            </div>

            <p>
                <%: Html.ActionLink("返回列表", "Index", new { }, new { @class = "button green link_medium" })%>
            </p>
        </fieldset>
    </div>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="CenterTitleContent" runat="server">
    配置权限
</asp:Content>
