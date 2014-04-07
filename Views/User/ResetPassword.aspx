<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Admin.Master" Inherits="System.Web.Mvc.ViewPage<TYStudio.UserViewModel>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    重置密码
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="center_content">
        <% using (Html.BeginForm())
           { %>

        <fieldset>
            <legend>UserViewModel</legend>

            <%: Html.HiddenFor(model => model.User_ID) %>

            <div class="editor-label">
                <%: Html.LabelFor(model => model.User_Name) %>
            </div>
            <div class="editor-field">
                <%: Html.TextBoxFor(model => model.User_Name, new { @readonly = true })%>
            </div>

            <div class="editor-label">
                <%: Html.LabelFor(model => model.NewPassword) %>
            </div>
            <div class="editor-field">
                <%: Html.EditorFor(model => model.NewPassword) %>
            </div>

            <p>
                <input type="submit" value="重置密码" class="button green medium" /><%: Html.ActionLink("返回列表", "Index", new { }, new { @class = "button green link_medium" })%>
            </p>
        </fieldset>
        <% } %>
    </div>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="CenterTitleContent" runat="server">
    重置密码
</asp:Content>
