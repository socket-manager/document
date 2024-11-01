<?php
/**
 * 親クラスファイルのタイトル的なもの
 * 
 * 親クラスファイル内容の説明的なもの
 * 
 * @license GPL
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 * @author 名前 <my.name@example.com>
 * @copyright 1997-2005 The PHP Group
 */

namespace Phpdoc\Sample;


/**
 * 親クラスのタイトル的なもの
 * 
 * 親クラスの説明的なもの
 */
class ParentClass
{
    /**
     * 親クラスのプロパティ 
     * 
     * @var string $my_property
     */
    private string $my_property;


    /**
     * __getマジックメソッド（親クラス）
     * 
     * @param string $name  プロパティ名
     * @return string       文字列データ
     */
    public function __get(string $name)
    {
        $ret = '';

        $flg = property_exists(self::class, $name);
        if($flg === true)
        {
            $ret = $this->{$name};
        }
        return $ret;
    }

    /**
     * __setマジックメソッド（親クラス）
     * 
     * @param string $name  プロパティ名
     * @param mixed $value  データ
     */
    public function __set(string $name, $value)
    {
        $flg = property_exists(self::class, $name);
        if($flg === true)
        {
            $this->{$name}($value);
        }
        return;
    }

    /**
     * __callマジックメソッド（親クラス）
     * 
     * @param string $name  メソッド名
     * @param array $args   引数
     */
    public function __call(string $name, array $args)
    {
        $flg = method_exists(self::class, $name);
        if($flg === true)
        {
            if($name === 'getString')
            {
                return $this->getString();
            }
            else
            if($name === 'setString')
            {
                return $this->setString($args[0]);
            }
        }
        return;
    }

    /**
     * 文字列データ取得（親クラス）
     * 
     * @return string 文字列データ
     */
    private function getString(): string
    {
        $ret = $this->my_property;
        return $ret;
    }

    /**
     * 文字列データ設定（親クラス）
     * 
     * @param string $data 文字列データ
     */
    private function setString(string $data): void
    {
        $this->my_property = $data;
    }
}
