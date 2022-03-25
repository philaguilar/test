<script runat="server" type="text/javascript">
        Platform.Load("Core", "1.1.2");
        var action = Request.GetQueryStringParameter("action");
        if(action == "GetHMAC")
        {
        var defaultNumber = 32112;
        Write(defaultNumber);
        }
</script>