// 拷贝打包文件到指定目录
const fs = require('fs');
const path = require('path')

const entDir = './build';
const outDir = 'F:/new-build/spa/react-test';

function delFile(path){
  let paths  = fs.normalize(path);
  if(fs.existsSync(paths)){
    fs.stats(paths,function(err,stats){
      if(err)throw err;
      if(stats.isFile()){
        fs.unlinkSync(paths); //删除文件
      }
    })
  }

}
function delDir(path){
    let files = [];
    if(fs.existsSync(path)){
        files = fs.readdirSync(path);
        files.forEach((file, index) => {
            let curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()){
                delDir(curPath); //递归删除文件夹
            } else {
                fs.unlinkSync(curPath,function(){
                  console.log("del  " + curPath)
                }); //删除文件

            }
        });
        fs.rmdirSync(path);
    }
}

function copyFile(ins,des){
  let _src = path.normalize(ins);
  let _dst = path.normalize(des);
  let  readable=fs.createReadStream(_src);//创建读取流
  let  writable=fs.createWriteStream(_dst);//创建写入流
  readable.pipe(writable);
  console.log('copy file === ' + ins);
}

/**
 * 复制文件夹
 */
function copyDir(ins,des){
  let src = path.normalize(ins);
  let dst = path.normalize(des);
  let paths = fs.readdirSync(src); //同步读取当前目录
  paths.forEach(function(path){
      var _src=src+'/'+path;
      var _dst=dst+'/'+path;
      fs.stat(_src,function(err,stats){  //stats  该对象 包含文件属性
          if(err)throw err;
          if(stats.isFile()){ //如果是个文件则拷贝
              let  readable=fs.createReadStream(_src);//创建读取流
              let  writable=fs.createWriteStream(_dst);//创建写入流
              readable.pipe(writable);
              console.log('copy ' + _src)
          }else if(stats.isDirectory()){ //是目录则 递归
              checkDirectory(_src,_dst,copyDir);
          }
      });
  });
}
function checkDirectory(src,dst,callback){
  fs.access(dst, fs.constants.F_OK, (err) => {
      if(err){
          fs.mkdirSync(dst);
          callback(src,dst);
      }else{
          callback(src,dst);
      }
    });
};





;(function totalCop(){
  console.log('start build floder copy ...');
  delDir(outDir+'/static');//删除old static文件夹
  fs.mkdirSync(outDir+'/static');//新建空static文件夹
  copyDir(entDir + '/static',outDir + '/static');
  copyFile(entDir + '/index.html',outDir + '/templates/index.html')
})()