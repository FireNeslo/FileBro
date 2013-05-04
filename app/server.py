# coding: utf-8
import SimpleHTTPServer
import SocketServer
PORT = 9999

def do_GET(self):
    self.send_response(200)
    self.send_header('Access-Control-Allow-Origin', '*')
    self.end_headers()

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler
Handler.do_GET = do_GET
httpd = SocketServer.TCPServer(("", PORT), Handler)
httpd.serve_forever()