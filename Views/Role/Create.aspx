<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Admin.Master" Inherits="System.Web.Mvc.ViewPage<LitchiServer.Role>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    添加角色
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <div class="center_content">

        <% using (Html.BeginForm())
           { %>

        <fieldset>
            <legend>Role</legend>

            <div class="editor-label">
                <%: Html.LabelFor(model => model.RoleName) %>
            </div>
            <div class="editor-field">
                <%: Html.EditorFor(model => model.RoleName) %>
            </div>

            <div class="editor-label" style="width:100%">
                选择权限<div class="float_right">全选<input type="radio" name="radSelect" id="selectAll" />&nbsp;&nbsp;&nbsp;&nbsp;取消全选<input type="radio" name="radSelect" id="unSelectAll" /></div>
            </div>
            <div class="clear_both"></div>
            <div class="editor-field">
               <%= Html.CheckBoxList("permissions", ViewData["PermissionSelectList"] as List<SelectListItem>) %>
            </div>

            <p>
                <input type="submit" value="添加" class="button green medium" /><%: Html.ActionLink("返回列表", "Index", new { }, new { @class = "button green link_medium" })%>
            </p>
        </fieldset>
        <% } %>
    </div>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="CenterTitleContent" runat="server">
    添加角色
</asp:Content>
