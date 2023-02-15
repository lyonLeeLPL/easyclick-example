/**
 * 常用JS变量:
 * agentEvent = 代理模式下自动点击模块
 * acEvent= 无障碍模式下自动点击模块
 * device = 设备信息模块
 * file = 文件处理模块
 * http = HTTP网络请求模块
 * shell = shell命令模块
 * thread= 多线程模块
 * image = 图色查找模块
 * utils= 工具类模块
 * global = 全局快捷方式模块
 * 常用java变量：
 *  context : Android的Context对象
 *  javaLoader : java的类加载器对象
 * 导入Java类或者包：
 *  importClass(类名) = 导入java类
 *      例如: importClass(java.io.File) 导入java的 File 类
 *  importPackage(包名) =导入java包名下的所有类
 *      例如: importPackage(java.util) 导入java.util下的类
 *
 */

function main() {
    //开始再这里编写代码了！！
//    toast("Hello World");
//    var name = readConfigString("name");
//    logd("姓名: " + name);
//    logd("年龄: " + readConfigString("age"));
//    logd("听音乐: " + readConfigString("music"));
//    logd("是不是一年级: " + readConfigString("one"));
//    logd("备注: " + readConfigString("mark"));
//    logd("jobTaskTag..." + readConfigString("jobTaskTag"));
//    //如果自动化服务正常
//    if (!autoServiceStart(3)) {
//        logd("自动化服务启动失败，无法执行脚本")
//        exit();
//        return;
//    }
    logd("开始执行脚本...")
    logd("见鬼了...")

    var selector = id("com.xingin.xhs:id/ck8");
    logd(selector)
    var result = click(selector);

    sleep(1000);
//     获取选择器对象
//        选择 节点 clz=android.widget.CheckBox所有节点，
    var node = clz("android.widget.ImageView").depth(18).getOneNodeInfo(10000);
    if (node) {
        node.click()
    } else {
      logd("无节点")
    }
    sleep(2000);
    var node_cii = id("com.xingin.xhs:id/cii").getOneNodeInfo(10000);
    if (node_cii) {
        node_cii.click()
    } else {
      logd("无节点")
    }
    sleep(1000)
    var node_wx = id("com.xingin.xhs:id/wx").getOneNodeInfo(10000);
    if (node_wx) {
        node_wx.click()
    } else {
      logd("无节点")
    }
     sleep(1000)
    var node_an0 = id("com.xingin.xhs:id/an0").getOneNodeInfo(10000);
    if (node_an0) {
        node_an0.click()
    } else {
      logd("无节点")
    }
     sleep(5000)
    var node_b6e = id("com.xingin.xhs:id/b6e").getOneNodeInfo(10000);
     if (node_b6e) {
          node_b6e.inputText("今日心情语录")
     } else {
       logd("无节点")
     }
     var node_b55 = id("com.xingin.xhs:id/b55").getOneNodeInfo(10000);
      if (node_b55) {
           node_b55.inputText("舒畅的心情是自己给予的，不要天真地去奢望别人的赏赐。")
      } else {
        logd("无节点")
      }
       sleep(1000)
       // 层级5
      var node_a4w = id("com.xingin.xhs:id/a4w").getOneNodeInfo(10000);
       if (node_a4w) {
            node_a4w.click()
       } else {
         logd("无节点")
       }

       logd("操作完成")
}

function autoServiceStart(time) {
    for (var i = 0; i < time; i++) {
        if (isServiceOk()) {
            return true;
        }
        var started = startEnv();
        logd("第" + (i + 1) + "次启动服务结果: " + started);
        if (isServiceOk()) {
            return true;
        }
    }
    return isServiceOk();
}

main();