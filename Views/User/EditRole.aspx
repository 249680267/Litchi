<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Admin.Master" Inherits="System.Web.Mvc.ViewPage<LitchiServer.UserViewModel>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    配置角色
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="center_content">
        <fieldset>
            <legend>UserViewModel</legend>

            <%: Html.HiddenFor(model => model.User_ID, new { @id = "hfUserId" })%>

            <div class="editor-label">
                <%: Html.LabelFor(model => model.User_Name) %>
            </div>
            <div class="editor-field">
                <%: Html.TextBoxFor(model => model.User_Name, new { @readonly = true }) %>
            </div>

            <div class="editor-label" style="width: 100%">
                配置角色<div id="updateMessage" class="float_right" ></div>
            </div>
            <div class="clear_both"></div>
            <div class="editor-field" id="roleCheck">
                <%= Html.CheckBoxList("roles", ViewData["RoleSelectList"] as List<SelectListItem>) %>
            </div>

            <p>
                <%: Html.ActionLink("返回列表", "Index", new { }, new { @class = "button green link_medium" })%>
            </p>
        </fieldset>
    </div>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="CenterTitleContent" runat="server">
    配置角色
</asp:Content>
