# Rules-list

# Clash
<p>SurgeClash.conf 是本人Surge3转换成Clash的配置文件，仅适用于Dler Cloud Gold及更高级别用户，供大家参考，可按照自己的需求自行修改。
<p>注意：Clash策略组是有先后顺序的，一个策略组如果被其它组引用，则这个策略组必须放在其它组前面。Surge3的策略组没有这个限制。
<p>使用方法：
<p>1、配置文件中的 DlerCloudToken 替换成自己在Dler Cloud上的托管token。
<p>2、在gist.github.com上新建一个私密gist，填好配置内容，获取gist的Raw链接。
<p>3、Surge3转Clash配置托管地址为：https://api.okab3.com/clash?url=私密gist的Raw链接&snippet=https://git.io/fjset
<p>其中snippet地址是本人Clash目录下的snippet.yml的Raw地址，PC端可以选择不加。
  
# Surge
<p>Surge3.conf 是自用的Surge3托管配置文件，仅适用于Dler Cloud Gold及更高级别用户，供大家参考，可按照自己的需求自行修改。
<p>使用方法：
<p>1、配置文件中的 DlerCloudToken 替换成自己在Dler Cloud上的托管token。
<p>2、在gist.github.com上新建一个私密gist，填好配置内容，获取gist的Raw链接。
<p>3、Surge3导入私密gist的Raw链接。
<p>4、需要MiMT的开启后配置CA、信任证书。

# Shadowrocket
<P>在神机和lhie1规则的基础上，添加了MiTM内容。
